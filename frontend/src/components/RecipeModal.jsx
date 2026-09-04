import { useEffect, useState } from "react";
import { Heart, Clock, Users, Leaf, ShieldAlert, Ban, CheckCircle2, Loader2, Lightbulb, Stethoscope } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { recipeImage } from "../lib/images";
import { DIFICULDADE, PET, REFEICAO } from "../lib/labels";
import { getRecipe } from "../lib/recipesLocal";

function Section({ icon: Icon, title, children }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-[#1E2A24] mb-3">
        <Icon className="h-5 w-5 text-[#2D5A47]" /> {title}
      </h4>
      {children}
    </div>
  );
}

export default function RecipeModal({ recipeId, open, onClose, favorite, onToggleFav }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!recipeId || !open) return;
    setLoading(false);
    setRecipe(getRecipe(recipeId));
  }, [recipeId, open]);

  const dif = recipe ? DIFICULDADE[recipe.dificuldade] : null;
  const pet = recipe ? PET[recipe.pet] : null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        data-testid="modal-recipe-detail"
        className="max-w-3xl p-0 gap-0 overflow-hidden rounded-2xl border-[#E2DDD5] max-h-[92vh] overflow-y-auto"
      >
        <DialogTitle className="sr-only">{recipe?.nome || "Detalhes da receita"}</DialogTitle>
        <DialogDescription className="sr-only">Detalhes completos da receita natural, incluindo ingredientes, preparo e avisos de segurança.</DialogDescription>
        {loading || !recipe ? (
          <div className="h-72 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#2D5A47]" />
          </div>
        ) : (
          <div>
            <div className="relative h-52 sm:h-64">
              <img src={recipeImage(recipe.id, recipe.img)} alt={recipe.nome} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A24]/80 to-transparent" />
              <button
                data-testid="modal-favorite-btn"
                onClick={() => onToggleFav(recipe.id)}
                aria-label="Favoritar"
                className="absolute top-4 right-16 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Heart className={`h-5 w-5 ${favorite ? "fill-[#D96B43] text-[#D96B43]" : "text-[#5C6B62]"}`} />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-[#FAF6EE]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/90 text-[#1E2A24]">{pet?.emoji} {pet?.label}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${dif?.color}`}>{dif?.label}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/90 text-[#1E2A24]">{REFEICAO[recipe.refeicao]?.label}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">{recipe.nome}</h2>
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-7">
              <div className="flex flex-wrap gap-4 text-sm text-[#5C6B62]">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#2D5A47]" /> {recipe.tempo}</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-[#2D5A47]" /> {recipe.porcoes}</span>
              </div>

              <Section icon={Leaf} title="Benefícios">
                <ul className="grid sm:grid-cols-2 gap-2">
                  {recipe.beneficios.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#E8F0EC] rounded-xl px-3 py-2 text-sm text-[#1E2A24]">
                      <CheckCircle2 className="h-4 w-4 text-[#2D5A47] mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </Section>

              <div className="grid sm:grid-cols-2 gap-7">
                <Section icon={CheckCircle2} title="Ingredientes">
                  <ul className="space-y-2">
                    {recipe.ingredientes.map((ing, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#1E2A24]">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D96B43] shrink-0" /> {ing}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section icon={Leaf} title="Modo de Preparo">
                  <ol className="space-y-3">
                    {recipe.preparo.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#1E2A24]">
                        <span className="h-6 w-6 rounded-full bg-[#2D5A47] text-[#FAF6EE] text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Section>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#F4EFE6] rounded-xl p-4">
                  <h4 className="flex items-center gap-2 font-semibold text-[#1E2A24] mb-1.5 text-sm"><Stethoscope className="h-4 w-4 text-[#2D5A47]" /> Indicado para</h4>
                  <p className="text-sm text-[#5C6B62] leading-relaxed">{recipe.indicado}</p>
                </div>
                <div className="bg-[#FBEAD1] rounded-xl p-4">
                  <h4 className="flex items-center gap-2 font-semibold text-[#1E2A24] mb-1.5 text-sm"><Lightbulb className="h-4 w-4 text-[#8A5A18]" /> Dicas</h4>
                  <ul className="space-y-1">
                    {recipe.dicas.map((d, i) => <li key={i} className="text-sm text-[#5C6B62] leading-relaxed">• {d}</li>)}
                  </ul>
                </div>
              </div>

              {/* Avisos: Regras de Ouro e Alimentos Proibidos */}
              <div className="rounded-2xl border border-[#F0D6C9] overflow-hidden" data-testid="warnings-section">
                <div className="bg-[#FEF6F2] p-5">
                  <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-[#8A3418] mb-3">
                    <ShieldAlert className="h-5 w-5" /> Regras de Ouro
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {recipe.avisos.regras_de_ouro.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5C4030]">
                        <CheckCircle2 className="h-4 w-4 text-[#8A5A18] mt-0.5 shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FEF2F2] p-5 border-t border-[#F0D6C9]">
                  <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-[#B91C1C] mb-3">
                    <Ban className="h-5 w-5" /> Alimentos Proibidos
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {recipe.avisos.alimentos_proibidos.map((a, i) => (
                      <li key={i} className="text-sm text-[#7F1D1D] bg-white/60 rounded-lg px-3 py-2">
                        <span className="font-semibold">{a.nome}</span> — {a.motivo}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
