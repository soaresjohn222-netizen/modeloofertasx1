import { motion } from "framer-motion";
import { Heart, Clock, ChevronRight } from "lucide-react";
import { recipeImage } from "../lib/images";
import { DIFICULDADE, PET } from "../lib/labels";

export default function RecipeCard({ recipe, index, favorite, onToggleFav, onOpen }) {
  const dif = DIFICULDADE[recipe.dificuldade];
  const pet = PET[recipe.pet];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
      data-testid={`recipe-card-${recipe.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E2DDD5] shadow-[0_4px_20px_-4px_rgba(45,90,71,0.08)] hover:shadow-[0_14px_34px_-8px_rgba(45,90,71,0.18)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 flex flex-col"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={recipeImage(recipe.id, recipe.img)}
          alt={recipe.nome}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-[#1E2A24]">
            {pet?.emoji} {pet?.label}
          </span>
        </div>
        <button
          data-testid={`favorite-btn-${recipe.id}`}
          onClick={(e) => { e.stopPropagation(); onToggleFav(recipe.id); }}
          aria-label="Favoritar"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className={`h-5 w-5 transition-colors ${favorite ? "fill-[#D96B43] text-[#D96B43]" : "text-[#5C6B62]"}`} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${dif?.color}`}>{dif?.label}</span>
          <span className="inline-flex items-center gap-1 text-xs text-[#5C6B62]">
            <Clock className="h-3.5 w-3.5" /> {recipe.tempo}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-[#1E2A24] leading-snug">{recipe.nome}</h3>
        <p className="mt-1.5 text-sm text-[#5C6B62] leading-relaxed flex-1">{recipe.beneficio}</p>

        <button
          data-testid={`open-recipe-${recipe.id}`}
          onClick={() => onOpen(recipe.id)}
          className="mt-4 inline-flex items-center justify-center gap-1.5 h-10 rounded-full bg-[#E8F0EC] text-[#2D5A47] font-semibold text-sm hover:bg-[#2D5A47] hover:text-[#FAF6EE] transition-colors"
        >
          Ver receita completa <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}
