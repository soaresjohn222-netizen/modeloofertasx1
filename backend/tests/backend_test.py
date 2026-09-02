"""Backend API tests — Receitas Naturais para Pets (auth simulada por cookie, receitas estáticas)."""
import os

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL missing")
BASE_URL = base_url.rstrip("/")
API = f"{BASE_URL}/api"

CREDS = {"usuario": "mariana@email.com", "senha": "123456"}


@pytest.fixture(scope="class")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --------------------------- Root / Stats ---------------------------
class TestRootAndStats:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        assert "message" in r.json()

    def test_stats(self, client):
        r = client.get(f"{API}/stats")
        assert r.status_code == 200
        d = r.json()
        assert d["total"] == 36
        assert d["gatos"] == 32
        assert d["cachorros"] == 4
        assert d["gatos"] + d["cachorros"] == d["total"]


# --------------------------- Auth simulada ---------------------------
class TestAuth:
    def test_login_sets_cookie_and_name(self):
        s = requests.Session()
        r = s.post(f"{API}/login", json=CREDS)
        assert r.status_code == 200
        d = r.json()
        assert d["usuario"] == CREDS["usuario"]
        assert d["nome"] == "Mariana"
        assert "pet_session" in s.cookies.get_dict()

    def test_me_with_cookie(self):
        s = requests.Session()
        s.post(f"{API}/login", json=CREDS)
        r = s.get(f"{API}/me")
        assert r.status_code == 200
        assert r.json()["nome"] == "Mariana"

    def test_me_without_cookie_401(self):
        r = requests.get(f"{API}/me")
        assert r.status_code == 401
        assert "detail" in r.json()

    def test_logout_clears_cookie(self):
        s = requests.Session()
        s.post(f"{API}/login", json=CREDS)
        assert "pet_session" in s.cookies.get_dict()
        r = s.post(f"{API}/logout")
        assert r.status_code == 200
        assert r.json()["ok"] is True
        assert s.cookies.get_dict().get("pet_session") in (None, "")
        me = s.get(f"{API}/me")
        assert me.status_code == 401

    def test_login_empty_fields_400(self, client):
        r = client.post(f"{API}/login", json={"usuario": "", "senha": ""})
        assert r.status_code == 400
        assert "detail" in r.json()

    def test_login_whitespace_only_400(self, client):
        r = client.post(f"{API}/login", json={"usuario": "  ", "senha": "  "})
        assert r.status_code == 400

    def test_login_missing_field_422(self, client):
        r = client.post(f"{API}/login", json={"usuario": "abc"})
        assert r.status_code == 422

    def test_login_name_from_dotted_email(self, client):
        r = client.post(f"{API}/login", json={"usuario": "ana.paula_silva@x.com", "senha": "x"})
        assert r.status_code == 200
        assert r.json()["nome"] == "Ana Paula Silva"


# --------------------------- Receitas: listagem + filtros ---------------------------
class TestRecipes:
    CARD_KEYS = {"id", "nome", "pet", "dificuldade", "refeicao", "beneficio", "tempo", "img"}

    def test_list_all(self, client):
        r = client.get(f"{API}/recipes")
        assert r.status_code == 200
        d = r.json()
        assert d["total"] == 36 == len(d["recipes"])
        assert set(d["recipes"][0].keys()) == self.CARD_KEYS
        ids = [x["id"] for x in d["recipes"]]
        assert len(ids) == len(set(ids)), "IDs duplicados"

    def test_filter_pet_gato(self, client):
        d = client.get(f"{API}/recipes", params={"pet": "gato"}).json()
        assert d["total"] == 32
        assert all(x["pet"] == "gato" for x in d["recipes"])

    def test_filter_pet_cachorro(self, client):
        d = client.get(f"{API}/recipes", params={"pet": "cachorro"}).json()
        assert d["total"] == 4
        assert all(x["pet"] == "cachorro" for x in d["recipes"])

    def test_filter_pet_todos(self, client):
        d = client.get(f"{API}/recipes", params={"pet": "todos"}).json()
        assert d["total"] == 36

    @pytest.mark.parametrize("dif", ["facil", "medio", "avancado"])
    def test_filter_dificuldade(self, client, dif):
        r = client.get(f"{API}/recipes", params={"dificuldade": dif})
        assert r.status_code == 200
        d = r.json()
        assert d["total"] > 0, f"Nenhuma receita com dificuldade {dif}"
        assert all(x["dificuldade"] == dif for x in d["recipes"])

    @pytest.mark.parametrize("ref", ["principal", "petisco"])
    def test_filter_refeicao(self, client, ref):
        d = client.get(f"{API}/recipes", params={"refeicao": ref}).json()
        assert d["total"] > 0
        assert all(x["refeicao"] == ref for x in d["recipes"])

    def test_dificuldade_sum_matches_total(self, client):
        total = 0
        for dif in ["facil", "medio", "avancado"]:
            total += client.get(f"{API}/recipes", params={"dificuldade": dif}).json()["total"]
        assert total == 36

    def test_refeicao_sum_matches_total(self, client):
        total = 0
        for ref in ["principal", "petisco"]:
            total += client.get(f"{API}/recipes", params={"refeicao": ref}).json()["total"]
        assert total == 36

    def test_combined_filters(self, client):
        d = client.get(f"{API}/recipes", params={"pet": "gato", "dificuldade": "facil", "refeicao": "petisco"}).json()
        assert all(
            x["pet"] == "gato" and x["dificuldade"] == "facil" and x["refeicao"] == "petisco"
            for x in d["recipes"]
        )

    def test_search_by_name_case_insensitive(self, client):
        all_recipes = client.get(f"{API}/recipes").json()["recipes"]
        term = all_recipes[0]["nome"].split()[0]
        d = client.get(f"{API}/recipes", params={"busca": term.upper()}).json()
        assert d["total"] >= 1
        assert any(term.lower() in x["nome"].lower() for x in d["recipes"])

    def test_search_by_ingredient(self, client):
        d = client.get(f"{API}/recipes", params={"busca": "frango"}).json()
        assert d["total"] > 0

    def test_search_no_results(self, client):
        d = client.get(f"{API}/recipes", params={"busca": "zzzzqqq-nao-existe"}).json()
        assert d["total"] == 0
        assert d["recipes"] == []


# --------------------------- Receita detalhe ---------------------------
class TestRecipeDetail:
    DETAIL_KEYS = {
        "id", "nome", "pet", "dificuldade", "refeicao", "beneficio", "tempo",
        "img", "beneficios", "ingredientes", "preparo", "indicado", "dicas", "porcoes", "avisos",
    }

    def test_detail_all_recipes_complete(self, client):
        recipes = client.get(f"{API}/recipes").json()["recipes"]
        for card in recipes:
            r = client.get(f"{API}/recipes/{card['id']}")
            assert r.status_code == 200, f"{card['id']} -> {r.status_code}"
            d = r.json()
            missing = self.DETAIL_KEYS - set(d.keys())
            assert not missing, f"{card['id']} campos faltando: {missing}"
            assert d["nome"] == card["nome"]
            for key in ("beneficios", "ingredientes", "preparo", "dicas"):
                assert isinstance(d[key], list) and len(d[key]) > 0, f"{card['id']}.{key} vazio"
            assert isinstance(d["indicado"], str) and d["indicado"]
            assert "_id" not in d

    def test_detail_avisos_structure(self, client):
        rid = client.get(f"{API}/recipes").json()["recipes"][0]["id"]
        d = client.get(f"{API}/recipes/{rid}").json()
        avisos = d["avisos"]
        assert isinstance(avisos["regras_de_ouro"], list) and len(avisos["regras_de_ouro"]) > 0
        proibidos = avisos["alimentos_proibidos"]
        assert isinstance(proibidos, list) and len(proibidos) > 0
        assert {"nome", "motivo"} <= set(proibidos[0].keys())

    def test_detail_not_found(self, client):
        r = client.get(f"{API}/recipes/nao-existe-123")
        assert r.status_code == 404
        assert "detail" in r.json()


# --------------------------- Avisos + Produtos Premium ---------------------------
class TestWarningsAndPremium:
    def test_warnings(self, client):
        r = client.get(f"{API}/warnings")
        assert r.status_code == 200
        d = r.json()
        assert len(d["regras_de_ouro"]) > 0
        assert len(d["alimentos_proibidos"]) > 0

    def test_premium_products(self, client):
        r = client.get(f"{API}/premium-products")
        assert r.status_code == 200
        products = r.json()["products"]
        assert len(products) == 3
        for p in products:
            assert {"id", "titulo", "descricao", "preco", "destaque", "img", "beneficios"} <= set(p.keys())
            assert isinstance(p["beneficios"], list) and len(p["beneficios"]) > 0
