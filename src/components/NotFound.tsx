import React, { useState } from 'react';
import { ArrowLeft, Home, Search, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RECIPES_DATA } from '../data/recipes';
import { Recipe } from '../types/recipe';

interface NotFoundProps {
  onNavigateHome: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onSearch: (query: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({
  onNavigateHome,
  onSelectRecipe,
  onSearch,
}) => {
  const [query, setQuery] = useState('');

  const featuredRecipes = RECIPES_DATA.slice(0, 4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      onNavigateHome();
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF9F5]">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Subtle Icon & Status Kicker */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-stone-100 border border-stone-200/80 flex items-center justify-center text-emerald-900 shadow-xs">
            <UtensilsCrossed className="w-6 h-6 text-emerald-800" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-900">
            Error 404 · Page Not Found
          </span>
        </div>

        {/* Editorial Headline */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Looks like this recipe isn’t on the menu.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-lg mx-auto leading-relaxed">
            The page you requested may have been moved, renamed, or whisked away. Let’s get you back to something delicious and nourishing.
          </p>
        </div>

        {/* In-page Search Bar */}
        <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto relative">
          <label htmlFor="not-found-search" className="sr-only">
            Search recipes
          </label>
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="not-found-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search healthy recipes by ingredient or dish..."
            className="w-full pl-10 pr-24 py-2.5 bg-white border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 shadow-xs"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-900 text-white text-xs sm:text-sm font-medium hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
          <button
            onClick={() => {
              onNavigateHome();
              setTimeout(() => {
                const el = document.getElementById('recipe-collection');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-300 text-stone-700 text-xs sm:text-sm font-medium hover:bg-stone-50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Healthy Recipes</span>
          </button>
        </div>

        {/* Popular / Main Pages Shortcuts */}
        <div className="pt-8 border-t border-stone-200/80 text-left">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-4 justify-center sm:justify-start">
            <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
            <span>Or explore our most popular recipes:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featuredRecipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => onSelectRecipe(recipe)}
                className="flex items-center gap-3 p-2.5 bg-white border border-stone-200/80 rounded-xl hover:border-emerald-800 hover:shadow-xs transition-all text-left cursor-pointer group"
              >
                <img
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  className="w-14 h-14 rounded-lg object-cover shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] text-emerald-800 font-medium block">
                    {recipe.category} · {recipe.totalTimeMinutes}m
                  </span>
                  <span className="font-serif text-sm font-bold text-stone-900 group-hover:text-emerald-900 transition-colors line-clamp-1">
                    {recipe.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
