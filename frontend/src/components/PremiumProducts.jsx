import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { PRODUCT_IMAGES } from "../lib/images";

export default function PremiumProducts({ products }) {
  const [selected, setSelected] = useState(null);
  const [comingSoon, setComingSoon] = useState(false);

  return (
    <section className="mt-14" data-testid="premium-section">
      <div className="flex items-center gap-2 mb-1.5">
        <Sparkles className="h-5 w-5 text-[#D96B43]" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#D96B43]">Produtos Premium</span>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E2A24]">Leve a nutrição do seu pet além</h2>
      <p className="mt-2 text-[#5C6B62] max-w-2xl">Materiais e kits selecionados para complementar a alimentação natural com segurança.</p>

      <div className="mt-7 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            data-testid={`premium-card-${p.id}`}
            className="group bg-white rounded-2xl overflow-hidden border border-[#E2DDD5] shadow-[0_4px_20px_-4px_rgba(45,90,71,0.08)] hover:shadow-[0_14px_34px_-8px_rgba(45,90,71,0.18)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 flex flex-col"
          >
            <div className="relative h-40 overflow-hidden">
              <img src={PRODUCT_IMAGES[p.img]} alt={p.titulo} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#D96B43] text-white">
                <Star className="h-3 w-3 fill-white" /> {p.destaque}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-lg font-semibold text-[#1E2A24] leading-snug">{p.titulo}</h3>
              <p className="mt-2 text-sm text-[#5C6B62] leading-relaxed flex-1">{p.descricao}</p>
              <p className="mt-3 font-display text-xl font-bold text-[#2D5A47]">{p.preco}</p>
              <Button
                data-testid={`premium-saibamais-${p.id}`}
                onClick={() => setSelected(p)}
                className="mt-4 rounded-full bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] gap-1.5 transition-colors"
              >
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalhes do produto */}
      <Dialog open={!!selected} onOpenChange={(v) => !v && setSelected(null)}>
        <DialogContent data-testid="premium-detail-modal" className="max-w-lg rounded-2xl border-[#E2DDD5] p-0 overflow-hidden">
          <DialogTitle className="sr-only">{selected?.titulo || "Produto premium"}</DialogTitle>
          <DialogDescription className="sr-only">Detalhes do produto premium.</DialogDescription>
          {selected && (
            <div>
              <div className="relative h-44">
                <img src={PRODUCT_IMAGES[selected.img]} alt={selected.titulo} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A24]/70 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl font-bold text-[#FAF6EE]">{selected.titulo}</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-[#5C6B62] leading-relaxed">{selected.descricao}</p>
                <ul className="space-y-2">
                  {selected.beneficios.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1E2A24]">
                      <CheckCircle2 className="h-4 w-4 text-[#2D5A47] mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-display text-2xl font-bold text-[#2D5A47]">{selected.preco}</span>
                  <Button
                    data-testid="premium-buy-btn"
                    onClick={() => { setSelected(null); setComingSoon(true); }}
                    className="rounded-full bg-[#D96B43] hover:bg-[#C25933] text-white transition-colors"
                  >
                    Quero este produto
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Aviso "em breve" */}
      <Dialog open={comingSoon} onOpenChange={setComingSoon}>
        <DialogContent data-testid="coming-soon-modal" className="max-w-sm rounded-2xl border-[#E2DDD5] text-center">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-[#1E2A24]">Em breve! 🌱</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-[#5C6B62] leading-relaxed">
            As compras estarão disponíveis em breve através da nossa loja parceira. Fique de olho!
          </p>
          <Button data-testid="coming-soon-close" onClick={() => setComingSoon(false)} className="rounded-full bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] mt-2">
            Entendi
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
