from fastapi import FastAPI, APIRouter, Response, Cookie
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel
from typing import Optional

from recipes_data import (
    RECIPES,
    REGRAS_DE_OURO,
    ALIMENTOS_PROIBIDOS,
    PREMIUM_PRODUCTS,
    filter_recipes,
    get_recipe,
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

app = FastAPI(title="Receitas Naturais para Pets")
api_router = APIRouter(prefix="/api")

SESSION_COOKIE = "pet_session"


class LoginInput(BaseModel):
    usuario: str
    senha: str


@api_router.get("/")
async def root():
    return {"message": "Receitas Naturais para Pets — API ativa"}


# --------------------------- Auth simulada (cookie) ---------------------------
@api_router.post("/login")
async def login(data: LoginInput):
    usuario = (data.usuario or "").strip()
    if not usuario or not (data.senha or "").strip():
        return JSONResponse(status_code=400, content={"detail": "Preencha usuário e senha."})

    # Nome amigável a partir do usuário/e-mail
    nome = usuario.split("@")[0]
    nome = nome.replace(".", " ").replace("_", " ").strip().title() or "Tutor"

    resp = JSONResponse(content={"usuario": usuario, "nome": nome})
    resp.set_cookie(
        key=SESSION_COOKIE,
        value=usuario,
        max_age=60 * 60 * 24 * 30,
        httponly=True,
        samesite="lax",
        secure=True,
        path="/",
    )
    return resp


@api_router.get("/me")
async def me(pet_session: Optional[str] = Cookie(default=None)):
    if not pet_session:
        return JSONResponse(status_code=401, content={"detail": "Não autenticado."})
    nome = pet_session.split("@")[0].replace(".", " ").replace("_", " ").strip().title() or "Tutor"
    return {"usuario": pet_session, "nome": nome}


@api_router.post("/logout")
async def logout():
    resp = JSONResponse(content={"ok": True})
    resp.delete_cookie(SESSION_COOKIE, path="/")
    return resp


# --------------------------- Receitas ---------------------------
@api_router.get("/recipes")
async def recipes(
    pet: Optional[str] = None,
    dificuldade: Optional[str] = None,
    refeicao: Optional[str] = None,
    busca: Optional[str] = None,
):
    data = filter_recipes(pet=pet, dificuldade=dificuldade, refeicao=refeicao, busca=busca)
    # Card não precisa do detalhe completo
    cards = [
        {
            "id": r["id"],
            "nome": r["nome"],
            "pet": r["pet"],
            "dificuldade": r["dificuldade"],
            "refeicao": r["refeicao"],
            "beneficio": r["beneficio"],
            "tempo": r["tempo"],
            "img": r["img"],
        }
        for r in data
    ]
    return {"total": len(cards), "recipes": cards}


@api_router.get("/recipes/{recipe_id}")
async def recipe_detail(recipe_id: str):
    r = get_recipe(recipe_id)
    if not r:
        return JSONResponse(status_code=404, content={"detail": "Receita não encontrada."})
    return {
        **r,
        "avisos": {
            "regras_de_ouro": REGRAS_DE_OURO,
            "alimentos_proibidos": ALIMENTOS_PROIBIDOS,
        },
    }


@api_router.get("/warnings")
async def warnings():
    return {"regras_de_ouro": REGRAS_DE_OURO, "alimentos_proibidos": ALIMENTOS_PROIBIDOS}


@api_router.get("/premium-products")
async def premium_products():
    return {"products": PREMIUM_PRODUCTS}


@api_router.get("/stats")
async def stats():
    total = len(RECIPES)
    gatos = len([r for r in RECIPES if r["pet"] == "gato"])
    caes = len([r for r in RECIPES if r["pet"] == "cachorro"])
    return {"total": total, "gatos": gatos, "cachorros": caes}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
