import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Cat, SearchX } from "lucide-react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import PremiumProducts from "../components/PremiumProducts";
import { Skeleton } from "../components/ui/skeleton";
import api from "../lib/api";
import { getFavorites, toggleFavorite } from "../lib/favorites";

const DICAS_DIA = [
  "Gatos são carnívoros estritos: a base do prato deve ser proteína animal.",
  "Incentive a hidratação: caldos naturais ajudam quem bebe pouca água.",
  "Introduza alimentos novos aos poucos, ao longo de 7 a 10 dias.",
  "Nunca use sal, cebola ou alho — são tóxicos para os pets.",
];

function StatCard({ icon: Icon, value, label, testid }) {
  return (
    <div data-testid={testid} className="bg-white rounded-2xl border border-[#E2DDD5] p-4 flex items-center gap-3">
      <div className="h-11 w-11 rounded-xl bg-[#E8F0EC] flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-[#2D5A47]" />
      </div>
      <div className="min-w-0">
        <p className="font-display text-xl font-bold text-[#1E2A24] leading-none">{value}</p>
        <p className="text-xs text-[#5C6B62] mt-1 truncate">{label}</p>
      </div>
    </div>
  );
}

export default function Dashboard({ user, onLogout }) {
  const [filters, setFilters] = useState({ pet: "gato", dificuldade: "todos", refeicao: "todos" });
  const [busca, setBusca] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(getFavorites());
  const [showFavsOnly, setShowFavsOnly] = useState(false);
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({ total: 0, gatos: 0 });
  const [openRecipe, setOpenRecipe] = useState(null);

  const dica = useMemo(() => DICAS_DIA[new Date().getDate() % DICAS_DIA.length], []);

  useEffect(() => {
    api.get("/premium-products").then(({ data }) => setProducts(data.products)).catch(() => {});
    api.get("/stats").then(({ data }) => setStats(data)).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = {};
    // Na visão "Favoritas" ignoramos os filtros para mostrar TODAS as favoritas
    if (!showFavsOnly) {
      if (filters.pet !== "todos") params.pet = filters.pet;
      if (filters.dificuldade !== "todos") params.dificuldade = filters.dificuldade;
      if (filters.refeicao !== "todos") params.refeicao = filters.refeicao;
      if (busca.trim()) params.busca = busca.trim();
    }

    const t = setTimeout(() => {
      api.get("/recipes", { params })
        .then(({ data }) => setRecipes(data.recipes))
        .catch(() => setRecipes([]))
        .finally(() => setLoading(false));
    }, 250);
    return () => clearTimeout(t);
  }, [filters, busca, showFavsOnly]);

  const handleToggleFav = (id) => setFavorites(toggleFavorite(id));

  const visible = showFavsOnly ? recipes.filter((r) => favorites.includes(r.id)) : recipes;

  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      <Header
        nome={user.nome}
        favCount={favorites.length}
        showFavsOnly={showFavsOnly}
        onToggleFavs={() => setShowFavsOnly((s) => !s)}
        onLogout={onLogout}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Boas-vindas */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1E2A24]">Olá, {user.nome}! 🐾</h1>
          <p className="mt-2 text-[#5C6B62] max-w-2xl">Explore receitas naturais pensadas para a saúde e o bem-estar do seu pet.</p>
        </motion.div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard icon={Heart} value={favorites.length} label="Receitas favoritas salvas" testid="stat-favorites" />
          <StatCard icon={BookOpen} value={stats.total} label="Receitas disponíveis" testid="stat-total" />
          <StatCard icon={Cat} value={stats.gatos} label="Receitas para gatos" testid="stat-cats" />
        </div>

        <div className="mt-4 bg-[#E8F0EC] border border-[#D2E3D8] rounded-2xl px-5 py-4 flex items-start gap-3" data-testid="tip-of-day">
          <span className="text-lg">🌿</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5A47]">Dica nutricional do dia</p>
            <p className="text-sm text-[#1E2A24] mt-0.5">{dica}</p>
          </div>
        </div>

        {/* Filtros */}
        {!showFavsOnly && (
          <div className="mt-8">
            <Filters filters={filters} setFilters={setFilters} busca={busca} setBusca={setBusca} />
          </div>
        )}

        {/* Grid */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-[#1E2A24]">
            {showFavsOnly ? "Minhas Favoritas" : "Receitas"}
            <span className="text-[#5C6B62] font-sans text-base font-normal ml-2" data-testid="results-count">({visible.length})</span>
          </h2>
        </div>

        {loading ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E2DDD5] overflow-hidden">
                <Skeleton className="h-44 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : visible.length === 0 ? (
          <div className="mt-10 text-center py-16" data-testid="empty-state">
            <SearchX className="h-12 w-12 text-[#5C6B62] mx-auto" />
            <p className="mt-4 font-display text-xl text-[#1E2A24]">Nenhuma receita encontrada</p>
            <p className="mt-1 text-[#5C6B62]">
              {showFavsOnly ? "Você ainda não salvou favoritas." : "Tente ajustar os filtros ou a busca."}
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((r, i) => (
              <RecipeCard
                key={r.id}
                recipe={r}
                index={i}
                favorite={favorites.includes(r.id)}
                onToggleFav={handleToggleFav}
                onOpen={setOpenRecipe}
              />
            ))}
          </div>
        )}

        {/* Produtos Premium */}
        {products.length > 0 && <PremiumProducts products={products} />}
      </main>

      <footer className="border-t border-[#E2DDD5] mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-[#5C6B62] flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Receitas Naturais para Pets</p>
          <p>Conteúdo educativo — não substitui orientação veterinária.</p>
        </div>
      </footer>

      <RecipeModal
        recipeId={openRecipe}
        open={!!openRecipe}
        onClose={() => setOpenRecipe(null)}
        favorite={openRecipe ? favorites.includes(openRecipe) : false}
        onToggleFav={handleToggleFav}
      />
    </div>
  );
}
