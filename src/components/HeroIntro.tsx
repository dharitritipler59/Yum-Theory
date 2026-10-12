import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroIntroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalRecipeCount: number;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  searchQuery,
  onSearchChange,
  totalRecipeCount,
}) => {
  return (
    <section className="pt-8 pb-6 border-b border-stone-200/70 bg-[#FAF9F5]" aria-labelledby="page-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 uppercase tracking-widest mb-2">
              <span>The Test Kitchen Collection</span>
              <span aria-hidden="true">·</span>
              <span>{totalRecipeCount} Tested Formulas</span>
            </div>

            {/* Exactly ONE H1 on the main page */}
            <h1
              id="page-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              Healthy Recipes
            </h1>

            {/* SEO and Introductory Paragraph */}
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Explore approachable healthy recipes, seasonal plant-forward meals, and nourishing weeknight dinners made with simple ingredients and easy cooking techniques. Discover delicious weight-loss-friendly meals that make eating well effortless.
            </p>
          </div>

          {/* Integrated Compact Search Bar */}
          <div className="w-full md:w-80 lg:w-96 shrink-0">
            <label htmlFor="recipe-search" className="sr-only">
              Search healthy recipes by ingredient, meal, or diet
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="recipe-search"
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search salmon, quinoa, kale, soup..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-800 focus:border-emerald-800 transition-shadow shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 p-0.5"
                  aria-label="Clear search input"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-700" />
                Try: salmon bowl, turmeric soup, kale salad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
