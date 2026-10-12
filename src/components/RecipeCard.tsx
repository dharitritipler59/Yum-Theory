import React from 'react';
import { Bookmark, Clock, ChefHat } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
  isSaved: boolean;
  onToggleSave: (recipeId: string, e: React.MouseEvent) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelect,
  isSaved,
  onToggleSave,
}) => {
  return (
    <article
      onClick={() => onSelect(recipe)}
      className="group cursor-pointer flex flex-col bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:border-stone-300"
      aria-label={`View recipe: ${recipe.title}`}
    >
      {/* Food Photo with Consistent 4:3 Aspect Ratio and Subtle Hover Zoom */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
        <img
          src={recipe.image}
          alt={recipe.imageAlt}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
        />

        {/* Save/Favorite Bookmark Action */}
        <button
          type="button"
          onClick={(e) => onToggleSave(recipe.id, e)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform duration-200 hover:scale-110 shadow-xs cursor-pointer ${
            isSaved
              ? 'bg-emerald-900 text-white'
              : 'bg-white/85 text-stone-700 hover:bg-white hover:text-stone-900'
          }`}
          title={isSaved ? 'Remove from saved recipes' : 'Save recipe'}
          aria-label={isSaved ? `Unsave ${recipe.title}` : `Save ${recipe.title}`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
        </button>

        {/* Subtle Category Kicker Tag on Image */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-stone-950/70 backdrop-blur-md text-[11px] font-medium text-stone-100 tracking-wide">
          {recipe.category}
        </div>
      </div>

      {/* Card Content & Editorial Typography */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Category · Total Time · Difficulty (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2 font-medium">
            <span className="flex items-center gap-1 text-emerald-800">
              <Clock className="w-3.5 h-3.5" />
              <span>{recipe.totalTimeMinutes}m total</span>
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="flex items-center gap-1">
              <ChefHat className="w-3.5 h-3.5 text-stone-400" />
              <span>{recipe.difficulty}</span>
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="font-mono tabular-nums">{recipe.nutrition.calories} kcal</span>
          </div>

          {/* Recipe Title in Editorial Serif */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug group-hover:text-emerald-900 transition-colors">
            {recipe.title}
          </h3>

          {/* Short Dek / Teaser */}
          <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {recipe.dek}
          </p>
        </div>

        {/* Footer of Card: Dietary Markers & Protein */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5 flex-wrap">
            {recipe.dietaryTags.slice(0, 2).map((tag, idx) => (
              <React.Fragment key={tag}>
                {idx > 0 && <span aria-hidden="true" className="text-stone-300">/</span>}
                <span className="text-stone-600 font-medium">{tag}</span>
              </React.Fragment>
            ))}
          </div>
          <span className="font-semibold text-emerald-900 font-mono tabular-nums">
            {recipe.nutrition.protein}g protein
          </span>
        </div>
      </div>
    </article>
  );
};
