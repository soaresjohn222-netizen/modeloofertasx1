import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dog, Cat, PawPrint, HelpCircle, UtensilsCrossed, Cookie, Timer, Shuffle,
  Compass, Clock, Drumstick, Beef, Egg, Fish, Layers, Check, ArrowLeft,
  ArrowRight, Sparkles, X, BookOpen, RefreshCw, RotateCcw,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { recipeImage } from "../lib/images";
import { DIFICULDADE, PET } from "../lib/labels";
import { recommendRecipes } from "../lib/recipesLocal";

const PREFS_KEY = "pet_quiz_prefs";

const QUESTIONS = [
  {
    key: "pet",
    titulo: "Para quem vamos cozinhar hoje?",
    ajuda: "Toque na resposta que combina com você.",
    options: [
      { value: "cachorro", label: "Para meu cachorro", icon: Dog },
      { value: "gato", label: "Para meu gato", icon: Cat },
      { value: "ambos", label: "Para os dois", icon: PawPrint },
      { value: "indefinido", label: "Ainda não sei", icon: HelpCircle },
    ],
  },
  {
    key: "objetivo",
    titulo: "O que você gostaria de preparar?",
    ajuda: "Escolha uma opção.",
    options: [
      { value: "refeicao", label: "Uma refeição simples", icon: UtensilsCrossed },
      { value: "petisco", label: "Um petisco", icon: Cookie },
      { value: "rapida", label: "Uma receita rápida", icon: Timer },
      { value: "variar", label: "Algo para variar a rotina", icon: Shuffle },
      { value: "explorar", label: "Quero apenas explorar as receitas", icon: Compass },
    ],
  },
  {
    key: "tempo",
    titulo: "Quanto tempo você tem hoje?",
    ajuda: "Escolha uma opção.",
    options: [
      { value: "ate10", label: "Até 10 minutos", icon: Clock },
      { value: "10a30", label: "De 10 a 30 minutos", icon: Clock },
      { value: "mais30", label: "Mais de 30 minutos", icon: Clock },
      { value: "qualquer", label: "Não tenho preferência", icon: HelpCircle },
    ],
  },
  {
    key: "ingrediente",
    titulo: "Você gostaria de começar por algum ingrediente?",
    ajuda: "Escolha uma opção.",
    options: [
      { value: "frango", label: "Frango", icon: Drumstick },
      { value: "carne", label: "Carne", icon: Beef },
      { value: "ovo", label: "Ovo", icon: Egg },
      { value: "peixe", label: "Atum ou peixe", icon: Fish },
      { value: "poucos", label: "Poucos ingredientes", icon: Layers },
      { value: "qualquer", label: "Qualquer opção", icon: Check },
    ],
  },
];

function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    const p = raw ? JSON.parse(raw) : null;
    return p && p.answers ? p : null;
  } catch {
    return null;
  }
}

function objetivoToRefeicao(objetivo) {
  if (objetivo === "petisco") return "petisco";
  if (objetivo === "refeicao") return "principal";
  return "todos";
}

export default function Quiz({ open, onClose, onOpenRecipe, onApplyFilters }) {
  const [savedPrefs, setSavedPrefs] = useState(null);
  const [step, setStep] = useState(0); // 0 = intro, 1..4 = perguntas, 5 = resultado
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Sempre que o quiz (re)abrir, começa do início e recarrega as preferências salvas
  useEffect(() => {
    if (open) {
      setSavedPrefs(loadPrefs());
      setStep(0);
      setAnswers({});
      setResult(null);
    }
  }, [open]);

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const finalize = (finalAnswers) => {
    try {
      const rec = recommendRecipes(finalAnswers);
      localStorage.setItem(
        PREFS_KEY,
        JSON.stringify({ answers: finalAnswers, lastRecipeId: rec.recipe ? rec.recipe.id : null })
      );
      setSavedPrefs(loadPrefs());
      setResult(rec);
    } catch (e) {
      setResult({ recipe: null, alternatives: [], aproximado: false, error: true });
    }
    setStep(5);
  };

  const startNew = () => { setAnswers({}); setStep(1); };

  const useLast = () => {
    if (savedPrefs) {
      setAnswers(savedPrefs.answers);
      finalize(savedPrefs.answers);
    }
  };

  const selectOption = (key, value) => setAnswers((a) => ({ ...a, [key]: value }));

  const goNext = () => {
    if (step >= 1 && step <= 4) {
      if (step === 4) finalize(answers);
      else setStep(step + 1);
    }
  };
  const goBack = () => {
    if (step > 1) setStep(step - 1);
    else setStep(0);
  };

  const handleClose = () => { reset(); onClose(); };

  const q = step >= 1 && step <= 4 ? QUESTIONS[step - 1] : null;
  const selected = q ? answers[q.key] : null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        data-testid="quiz-modal"
        className="max-w-lg p-0 gap-0 overflow-hidden rounded-2xl border-[#E2DDD5] max-h-[94vh] overflow-y-auto [&>button]:hidden"
      >
        <DialogTitle className="sr-only">Quiz de receitas para o seu pet</DialogTitle>
        <DialogDescription className="sr-only">Responda algumas perguntas rápidas para receber uma sugestão de receita.</DialogDescription>

        {/* Cabeçalho */}
        <div className="bg-[#2D5A47] text-[#FAF6EE] px-6 py-5 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[#FAF6EE]/15 flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="font-display text-lg font-semibold leading-tight">
              Qual receita vamos preparar para o seu pet hoje?
            </p>
          </div>
          <button
            data-testid="quiz-close-btn"
            onClick={handleClose}
            aria-label="Fechar quiz"
            className="shrink-0 h-8 w-8 rounded-full hover:bg-[#FAF6EE]/15 flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {/* ---------------- INTRO ---------------- */}
            {step === 0 && (
              <motion.div key="intro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center">
                <p className="text-[#5C6B62] leading-relaxed">
                  Vamos encontrar uma sugestão de acordo com o seu pet, o tempo que você tem e os ingredientes que prefere usar.
                </p>
                <div className="mt-7 space-y-3">
                  {savedPrefs && (
                    <Button
                      data-testid="quiz-use-last-btn"
                      onClick={useLast}
                      className="w-full h-14 rounded-2xl bg-[#E8F0EC] text-[#2D5A47] hover:bg-[#d8e7de] text-base font-semibold gap-2"
                    >
                      <RotateCcw className="h-5 w-5" /> Usar minhas últimas respostas
                    </Button>
                  )}
                  <Button
                    data-testid="quiz-start-btn"
                    onClick={startNew}
                    className="w-full h-14 rounded-2xl bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] text-base font-semibold gap-2"
                  >
                    <Sparkles className="h-5 w-5" /> {savedPrefs ? "Refazer o quiz" : "Começar"}
                  </Button>
                  <button
                    data-testid="quiz-skip-btn"
                    onClick={handleClose}
                    className="w-full h-12 rounded-2xl border border-[#E2DDD5] text-[#5C6B62] hover:text-[#2D5A47] hover:border-[#2D5A47] text-base font-medium transition-colors"
                  >
                    Pular por enquanto
                  </button>
                </div>
                <p className="mt-5 text-xs text-[#8A9389]">Você pode fechar ou pular a qualquer momento.</p>
              </motion.div>
            )}

            {/* ---------------- PERGUNTAS ---------------- */}
            {q && (
              <motion.div key={q.key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5A47]" data-testid="quiz-progress">
                  Pergunta {step} de 4
                </p>
                <div className="mt-1.5 h-2 w-full rounded-full bg-[#E8F0EC] overflow-hidden">
                  <div className="h-full bg-[#2D5A47] transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }} />
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-[#1E2A24] leading-snug">{q.titulo}</h3>
                <p className="mt-1 text-sm text-[#5C6B62]">{q.ajuda}</p>

                <div className="mt-5 grid gap-3">
                  {q.options.map((opt) => {
                    const Icon = opt.icon;
                    const active = selected === opt.value;
                    return (
                      <button
                        key={opt.value}
                        data-testid={`quiz-option-${opt.value}`}
                        onClick={() => selectOption(q.key, opt.value)}
                        aria-pressed={active}
                        className={`w-full flex items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5A47] focus-visible:ring-offset-2 ${
                          active
                            ? "border-[#2D5A47] bg-[#E8F0EC]"
                            : "border-[#E2DDD5] bg-white hover:border-[#9BB4A6]"
                        }`}
                      >
                        <span className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${active ? "bg-[#2D5A47] text-[#FAF6EE]" : "bg-[#F4EFE6] text-[#2D5A47]"}`}>
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="flex-1 text-base font-medium text-[#1E2A24]">{opt.label}</span>
                        <span className={`h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 ${active ? "border-[#2D5A47] bg-[#2D5A47]" : "border-[#CFC8BB]"}`}>
                          {active && <Check className="h-4 w-4 text-[#FAF6EE]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Button
                    data-testid="quiz-back-btn"
                    onClick={goBack}
                    variant="outline"
                    className="h-12 rounded-full border-[#E2DDD5] text-[#1E2A24] gap-1.5 px-5"
                  >
                    <ArrowLeft className="h-4 w-4" /> Voltar
                  </Button>
                  <Button
                    data-testid="quiz-continue-btn"
                    onClick={goNext}
                    disabled={!selected}
                    className="flex-1 h-12 rounded-full bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] text-base font-semibold gap-1.5 disabled:opacity-50"
                  >
                    {step === 4 ? "Ver sugestão" : "Continuar"} <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <button
                  data-testid="quiz-skip-inline"
                  onClick={handleClose}
                  className="mt-4 w-full text-center text-sm text-[#8A9389] hover:text-[#2D5A47] transition-colors"
                >
                  Pular por enquanto
                </button>
              </motion.div>
            )}

            {/* ---------------- RESULTADO ---------------- */}
            {step === 5 && (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                {result && result.recipe ? (
                  <div data-testid="quiz-result">
                    <div className="text-center">
                      <p className="font-display text-2xl font-bold text-[#1E2A24]">Encontramos uma sugestão para você começar.</p>
                      {result.aproximado && (
                        <p className="mt-2 text-sm text-[#8A5A18] bg-[#FBEAD1] rounded-lg px-3 py-2">
                          Não encontramos uma receita com todos esses filtros, mas esta é a opção mais próxima disponível no momento.
                        </p>
                      )}
                    </div>

                    <div className="mt-5 rounded-2xl border border-[#E2DDD5] overflow-hidden bg-white">
                      <div className="relative h-40">
                        <img src={recipeImage(result.recipe.id, result.recipe.img)} alt={result.recipe.nome} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A24]/70 to-transparent" />
                        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/90 text-[#1E2A24]">{PET[result.recipe.pet]?.emoji} {PET[result.recipe.pet]?.label}</span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${DIFICULDADE[result.recipe.dificuldade]?.color}`}>{DIFICULDADE[result.recipe.dificuldade]?.label}</span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/90 text-[#1E2A24]">⏱ {result.recipe.tempo}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-xl font-bold text-[#1E2A24]">{result.recipe.nome}</h3>
                        <p className="mt-1.5 text-sm text-[#5C6B62]">{result.recipe.beneficio}</p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#2D5A47]">Ingredientes principais</p>
                        <p className="text-sm text-[#1E2A24]">{result.recipe.ingredientes.slice(0, 4).join(" · ")}</p>
                        <p className="mt-4 text-xs text-[#8A9389]">
                          Com base nas suas respostas, esta receita combina com o tempo e o tipo de preparo que você escolheu. Confira os ingredientes e as orientações antes de oferecer.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <Button
                        data-testid="quiz-ver-receita-btn"
                        onClick={() => onOpenRecipe(result.recipe.id)}
                        className="w-full h-13 py-3 rounded-2xl bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] text-base font-semibold"
                      >
                        Ver receita
                      </Button>
                      <div className="flex gap-3">
                        <Button
                          data-testid="quiz-outra-receita-btn"
                          onClick={() => onApplyFilters({ pet: answers.pet, refeicao: objetivoToRefeicao(answers.objetivo) })}
                          variant="outline"
                          className="flex-1 h-12 rounded-2xl border-[#E2DDD5] text-[#1E2A24] font-medium"
                        >
                          Escolher outra receita
                        </Button>
                        <Button
                          data-testid="quiz-inicio-btn"
                          onClick={reset}
                          variant="outline"
                          className="flex-1 h-12 rounded-2xl border-[#E2DDD5] text-[#1E2A24] font-medium gap-1.5"
                        >
                          <RefreshCw className="h-4 w-4" /> Voltar ao início
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div data-testid="quiz-error" className="text-center">
                    <p className="font-display text-xl font-bold text-[#1E2A24]">Não conseguimos carregar uma sugestão agora</p>
                    <p className="mt-2 text-sm text-[#5C6B62]">
                      Não conseguimos carregar uma sugestão agora, mas você ainda pode acessar todas as receitas normalmente.
                    </p>
                    <div className="mt-6 space-y-3">
                      <Button
                        data-testid="quiz-ver-todas-btn"
                        onClick={() => onApplyFilters({})}
                        className="w-full h-13 py-3 rounded-2xl bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] text-base font-semibold gap-2"
                      >
                        <BookOpen className="h-5 w-5" /> Ver todas as receitas
                      </Button>
                      <Button
                        data-testid="quiz-tentar-novamente-btn"
                        onClick={() => finalize(answers)}
                        variant="outline"
                        className="w-full h-12 rounded-2xl border-[#E2DDD5] text-[#1E2A24] font-medium gap-2"
                      >
                        <RefreshCw className="h-4 w-4" /> Tentar novamente
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
