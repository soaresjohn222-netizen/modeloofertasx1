import { RECIPES, WARNINGS, PREMIUM_PRODUCTS } from "../data/recipes";

export { RECIPES, WARNINGS, PREMIUM_PRODUCTS };

export function filterRecipes({ pet, dificuldade, refeicao, busca } = {}) {
  let result = RECIPES;
  if (pet && pet !== "todos") result = result.filter((r) => r.pet === pet);
  if (dificuldade && dificuldade !== "todos") result = result.filter((r) => r.dificuldade === dificuldade);
  if (refeicao && refeicao !== "todos") result = result.filter((r) => r.refeicao === refeicao);
  if (busca && busca.trim()) {
    const q = busca.trim().toLowerCase();
    result = result.filter(
      (r) =>
        r.nome.toLowerCase().includes(q) ||
        r.beneficio.toLowerCase().includes(q) ||
        r.ingredientes.some((i) => i.toLowerCase().includes(q))
    );
  }
  return result;
}

export function getRecipe(id) {
  const r = RECIPES.find((x) => x.id === id);
  if (!r) return null;
  return { ...r, avisos: WARNINGS };
}

export function getStats() {
  return {
    total: RECIPES.length,
    gatos: RECIPES.filter((r) => r.pet === "gato").length,
    cachorros: RECIPES.filter((r) => r.pet === "cachorro").length,
  };
}

// ---------------- Recomendação do quiz ----------------
// answers: { pet, objetivo, tempo, ingrediente }
// pet: 'cachorro' | 'gato' | 'ambos' | 'indefinido'
// objetivo: 'refeicao' | 'petisco' | 'rapida' | 'variar' | 'explorar'
// tempo: 'ate10' | '10a30' | 'mais30' | 'qualquer'
// ingrediente: 'frango' | 'carne' | 'ovo' | 'peixe' | 'poucos' | 'qualquer'
function tempoMin(tempoStr) {
  const m = String(tempoStr).match(/(\d+)\s*min/);
  if (m) return parseInt(m[1], 10);
  const h = String(tempoStr).match(/(\d+)\s*h/);
  if (h) return parseInt(h[1], 10) * 60;
  return 30;
}

const INGREDIENTE_TERMOS = {
  frango: ["frango"],
  carne: ["carne", "bovin", "patinho", "músculo", "musculo", "coração", "coracao", "fígado bovino", "figado bovino"],
  ovo: ["ovo"],
  peixe: ["atum", "peixe", "sardinha", "tilápia", "tilapia", "merluza", "pescada", "salmão", "salmao"],
};

export function recommendRecipes(answers) {
  const { pet, objetivo, tempo, ingrediente } = answers || {};

  // 1) Espécie (nunca cruzar espécie)
  let pool = RECIPES;
  if (pet === "cachorro") pool = pool.filter((r) => r.pet === "cachorro");
  else if (pet === "gato") pool = pool.filter((r) => r.pet === "gato");
  // 'ambos' e 'indefinido' -> todas as espécies

  const score = (r) => {
    let s = 0;
    // 2) Objetivo
    if (objetivo === "refeicao" && r.refeicao === "principal") s += 3;
    if (objetivo === "petisco" && r.refeicao === "petisco") s += 3;
    if (objetivo === "rapida" && tempoMin(r.tempo) <= 15) s += 2;
    if (objetivo === "variar") s += 0; // qualquer, leve preferência por principais
    // 3) Tempo
    const t = tempoMin(r.tempo);
    if (tempo === "ate10" && t <= 10) s += 2;
    else if (tempo === "10a30" && t > 10 && t <= 30) s += 2;
    else if (tempo === "mais30" && t > 30) s += 2;
    else if (tempo === "ate10" && t <= 20) s += 1;
    // 4) Ingrediente
    if (ingrediente && ingrediente !== "qualquer" && ingrediente !== "poucos") {
      const termos = INGREDIENTE_TERMOS[ingrediente] || [];
      const texto = (r.nome + " " + r.ingredientes.join(" ")).toLowerCase();
      if (termos.some((tm) => texto.includes(tm))) s += 3;
    }
    if (ingrediente === "poucos" && r.ingredientes.length <= 2) s += 2;
    return s;
  };

  const ranked = [...pool].sort((a, b) => score(b) - score(a));
  const best = ranked[0] || null;
  const bestScore = best ? score(best) : 0;
  return {
    recipe: best ? { ...best, avisos: WARNINGS } : null,
    alternatives: ranked.slice(1, 4),
    // aproximado quando não bateu bem com objetivo+ingrediente+tempo
    aproximado: bestScore < 4,
  };
}
