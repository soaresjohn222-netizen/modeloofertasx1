import { Leaf, LogOut, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function Header({ nome, favCount, showFavsOnly, onToggleFavs, onLogout }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#FAF6EE]/85 border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="h-9 w-9 rounded-xl bg-[#2D5A47] flex items-center justify-center shrink-0">
            <Leaf className="h-5 w-5 text-[#FAF6EE]" />
          </div>
          <div className="min-w-0">
            <p className="font-display font-semibold text-[#1E2A24] leading-none truncate">Receitas Naturais</p>
            <p className="text-xs text-[#5C6B62] leading-none mt-1 truncate">Olá, {nome}! 🌿</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            data-testid="toggle-favorites-btn"
            onClick={onToggleFavs}
            className={`rounded-full border-[#E2DDD5] gap-2 ${
              showFavsOnly ? "bg-[#2D5A47] text-[#FAF6EE] border-[#2D5A47] hover:bg-[#244939] hover:text-[#FAF6EE]" : "bg-white text-[#1E2A24] hover:text-[#2D5A47]"
            }`}
          >
            <Heart className={`h-4 w-4 ${showFavsOnly ? "fill-[#FAF6EE]" : ""}`} />
            <span className="hidden sm:inline">Favoritas</span>
            <span data-testid="favorites-count" className="text-xs font-bold">{favCount}</span>
          </Button>
          <Button
            data-testid="logout-btn"
            onClick={onLogout}
            className="rounded-full bg-[#D96B43] hover:bg-[#C25933] text-white gap-2 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
