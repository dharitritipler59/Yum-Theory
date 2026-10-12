import React from 'react';
import { RotateCcw, SlidersHorizontal, Clock, Sparkles } from 'lucide-react';
import { DietaryTag } from '../types/recipe';

export const PRIMARY_CATEGORIES = [
  'All Recipes',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Vegetarian',
  'High Protein',
  'Salads',
  'Healthy Snacks',
  'Quick and Easy',
  'Low-Carb',
] as const;

export type PrimaryCategory = typeof PRIMARY_CATEGORIES[number];

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedDietary: DietaryTag[];
  onToggleDietary: (tag: DietaryTag) => void;
  maxPrepTime: number | null; // minutes or null for all
  onSelectMaxPrepTime: (mins: number | null) => void;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedDietary,
  onToggleDietary,
  maxPrepTime,
  onSelectMaxPrepTime,
  hasActiveFilters,
  onResetFilters,
}) => {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const DIETARY_OPTIONS: DietaryTag[] = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'High Protein',
    'Low-Carb',
  ];

  return (
    <div className="bg-[#FAF9F5] border-b border-stone-200/80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Horizontal Category Row (Primary 10 categories) */}
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs font-medium scroll-smooth"
            role="tablist"
            aria-label="Recipe categories"
          >
            {PRIMARY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all text-xs font-medium shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-900 text-white shadow-xs font-semibold'
                      : 'bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-100 border border-stone-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick toggle for secondary filters */}
          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                showAdvanced || selectedDietary.length > 0 || maxPrepTime !== null
                  ? 'border-emerald-800 text-emerald-900 bg-emerald-50/60'
                  : 'border-stone-200 bg-white text-stone-600 hover:text-stone-900'
              }`}
              aria-expanded={showAdvanced}
              aria-label="Toggle dietary & prep time filter controls"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Refine</span>
              {(selectedDietary.length > 0 || maxPrepTime !== null) && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-stone-600 hover:text-rose-700 hover:bg-rose-50/50 rounded-lg transition-colors border border-transparent hover:border-rose-200"
                title="Reset all filters"
                aria-label="Reset all filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Expandable Refinement Panel (Dietary & Prep Time) */}
        {showAdvanced && (
          <div className="pt-3 pb-1 border-t border-stone-200/60 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-150">
            {/* Dietary Tags */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
                <span>Dietary Preferences</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {DIETARY_OPTIONS.map((tag) => {
                  const active = selectedDietary.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => onToggleDietary(tag)}
                      className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                        active
                          ? 'bg-emerald-800 text-white font-medium'
                          : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                      }`}
                      aria-pressed={active}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preparation / Total Time */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5 text-emerald-800" />
                <span>Total Time</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'Any Duration', val: null },
                  { label: '≤ 15 mins', val: 15 },
                  { label: '≤ 30 mins', val: 30 },
                  { label: '≤ 45 mins', val: 45 },
                ].map((opt) => {
                  const active = maxPrepTime === opt.val;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => onSelectMaxPrepTime(opt.val)}
                      className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                        active
                          ? 'bg-emerald-800 text-white font-medium'
                          : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                      }`}
                      aria-pressed={active}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
