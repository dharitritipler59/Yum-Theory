import React, { useState } from 'react';
import { ArrowUpDown, ChefHat, RefreshCcw } from 'lucide-react';
import { Recipe, SortOption } from '../types/recipe';
import { RecipeCard } from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  totalFilteredCount: number;
  totalCatalogCount: number;
  activeCategory: string;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  savedIds: Set<string>;
  onToggleSave: (recipeId: string, e: React.MouseEvent) => void;
  onResetFilters: () => void;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({
  recipes,
  totalFilteredCount,
  totalCatalogCount,
  activeCategory,
  sortBy,
  onSortChange,
  onSelectRecipe,
  savedIds,
  onToggleSave,
  onResetFilters,
}) => {
  const [displayCount, setDisplayCount] = useState<number>(6);

  // If filtered recipes change, show at least min
  const visibleRecipes = recipes.slice(0, displayCount);
  const hasMore = displayCount < recipes.length;

  return (
    <section id="recipe-collection" className="py-8 sm:py-10" aria-labelledby="grid-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Sort Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <h2
              id="grid-heading"
              className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight"
            >
              Explore Healthy Recipes
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Showing <span className="font-semibold text-stone-900 font-mono tabular-nums">{visibleRecipes.length}</span> of{' '}
              <span className="font-semibold text-stone-900 font-mono tabular-nums">{totalFilteredCount}</span>{' '}
              {activeCategory !== 'All Recipes' ? `under "${activeCategory}"` : 'recipes'}{' '}
              {totalFilteredCount < totalCatalogCount && `(filtered from ${totalCatalogCount})`}
            </p>
          </div>

          {/* Compact Sort Control */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <label htmlFor="sort-select" className="text-xs font-medium text-stone-500 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-white border border-stone-200 text-stone-800 text-xs rounded-lg px-3 py-1.5 focus:outline-hidden focus:border-emerald-800 shadow-xs cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="quickest">Quickest Total Time</option>
              <option value="alphabetical">Alphabetical (A–Z)</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Empty State */}
        {recipes.length === 0 ? (
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4 text-stone-400">
              <ChefHat className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-800">No recipes matched your criteria</h3>
            <p className="text-sm text-stone-500 mt-1 leading-relaxed">
              Try adjusting your dietary preferences, clearing the search query, or selecting a broader category.
            </p>
            <button
              onClick={onResetFilters}
              className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-900 text-white rounded-lg text-xs font-medium hover:bg-emerald-800 transition-colors shadow-xs"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
            {/* Main Responsive Recipe Grid: 3-4 cols desktop, 2-3 cols tablet, 1-2 cols mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
              {visibleRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={onSelectRecipe}
                  isSaved={savedIds.has(recipe.id)}
                  onToggleSave={onToggleSave}
                />
              ))}
            </div>

            {/* Load More Pagination Button */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setDisplayCount((prev) => prev + 4)}
                  className="px-6 py-2.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-xs"
                >
                  Load More Recipes ({recipes.length - visibleRecipes.length} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
