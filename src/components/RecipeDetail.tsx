import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  ChefHat,
  Bookmark,
  Share2,
  Printer,
  Check,
  CheckCircle2,
  Minus,
  Plus,
  HelpCircle,
  Sparkles,
  Flame,
  Scale,
} from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  onSelectRelated: (recipe: Recipe) => void;
  allRecipes: Recipe[];
  isSaved: boolean;
  onToggleSave: (recipeId: string, e: React.MouseEvent) => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipe,
  onBack,
  onSelectRelated,
  allRecipes,
  isSaved,
  onToggleSave,
}) => {
  const [servings, setServings] = useState<number>(recipe.baseServings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top when recipe changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setServings(recipe.baseServings);
    setCheckedIngredients({});
    setCompletedSteps({});
  }, [recipe]);

  const servingMultiplier = servings / recipe.baseServings;

  const toggleIngredient = (id: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleStep = (stepNum: number) => {
    setCompletedSteps((prev) => ({ ...prev, [stepNum]: !prev[stepNum] }));
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const relatedRecipes = allRecipes
    .filter((r) => r.id !== recipe.id && (r.category === recipe.category || r.dietaryTags.some((t) => recipe.dietaryTags.includes(t))))
    .slice(0, 3);

  // Helper to format scaled ingredient quantity
  const formatQuantity = (baseAmount: number): string => {
    const scaled = baseAmount * servingMultiplier;
    // Round to clean decimal or fractions
    if (scaled === 0.25) return '1/4';
    if (scaled === 0.33 || scaled === 0.34) return '1/3';
    if (scaled === 0.5) return '1/2';
    if (scaled === 0.75) return '3/4';
    if (scaled === 1.5) return '1 1/2';
    if (scaled === 2.5) return '2 1/2';
    if (Number.isInteger(scaled)) return scaled.toString();
    return scaled.toFixed(1).replace(/\.0$/, '');
  };

  return (
    <article className="min-h-screen bg-[#FAF9F5] py-8 sm:py-12" aria-labelledby="recipe-main-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-stone-500">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Healthy Recipes</span>
          </button>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span>{recipe.category}</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span className="text-stone-800 font-medium truncate max-w-[200px] sm:max-w-xs">{recipe.title}</span>
        </nav>

        {/* Editorial Header */}
        <header className="mb-8">
          {/* Unboxed Metadata Kicker */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-3">
            <span className="text-emerald-800 font-semibold tracking-wide uppercase">{recipe.category}</span>
            <span aria-hidden="true">·</span>
            <span>By {recipe.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>Published {recipe.publishedDate}</span>
          </div>

          {/* EXACTLY ONE H1 for this recipe page */}
          <h1
            id="recipe-main-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.18]"
            style={{ textWrap: 'balance' }}
          >
            {recipe.title}
          </h1>

          {/* Introductory Paragraph with Primary Keywords */}
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            {recipe.dek}
          </p>

          {/* Action Row: Save, Share, Print */}
          <div className="mt-6 pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => onToggleSave(recipe.id, e)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  isSaved
                    ? 'bg-emerald-900 text-white'
                    : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-50'
                }`}
                aria-pressed={isSaved}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                <span>{isSaved ? 'Saved in Collection' : 'Save Recipe'}</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors"
                title="Copy recipe URL to clipboard"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors"
                title="Print friendly recipe card"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <span className="font-semibold text-stone-900">★ {recipe.rating}</span>
              <span>({recipe.reviewCount} kitchen reviews)</span>
            </div>
          </div>
        </header>

        {/* Hero Food Photography (Descriptive Alt Text, Natural Food Presentation) */}
        <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-xs mb-8">
          <img
            src={recipe.image}
            alt={recipe.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Facts Strip: Prep, Cook, Total, Calories, Protein */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white rounded-xl border border-stone-200/80 shadow-xs mb-10">
          <div className="p-3 bg-[#FAF9F5] rounded-lg">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <Clock className="w-3.5 h-3.5 text-emerald-800" />
              <span>Prep Time</span>
            </div>
            <div className="text-base font-bold text-stone-900 font-mono tabular-nums">
              {recipe.prepTimeMinutes} mins
            </div>
          </div>

          <div className="p-3 bg-[#FAF9F5] rounded-lg">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <Flame className="w-3.5 h-3.5 text-emerald-800" />
              <span>Cook Time</span>
            </div>
            <div className="text-base font-bold text-stone-900 font-mono tabular-nums">
              {recipe.cookTimeMinutes} mins
            </div>
          </div>

          <div className="p-3 bg-[#FAF9F5] rounded-lg">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <ChefHat className="w-3.5 h-3.5 text-emerald-800" />
              <span>Difficulty</span>
            </div>
            <div className="text-base font-bold text-stone-900">
              {recipe.difficulty}
            </div>
          </div>

          <div className="p-3 bg-[#FAF9F5] rounded-lg">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <Scale className="w-3.5 h-3.5 text-emerald-800" />
              <span>Per Serving</span>
            </div>
            <div className="text-base font-bold text-stone-900 font-mono tabular-nums">
              {recipe.nutrition.calories} kcal · {recipe.nutrition.protein}g protein
            </div>
          </div>
        </div>

        {/* Recipe Body: Two Column Layout (Ingredients & Scaling / Instructions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Ingredients with Servings Scaler */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <h2 className="text-xl font-serif font-bold text-stone-900">
                  Ingredients
                </h2>

                {/* Servings Scaler */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-500 font-medium">Serves:</span>
                  <div className="flex items-center border border-stone-300 rounded-lg bg-[#FAF9F5] px-1 py-0.5">
                    <button
                      onClick={() => setServings((s) => Math.max(1, s - 1))}
                      disabled={servings <= 1}
                      className="p-1 text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                      aria-label="Decrease servings"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-xs font-mono font-bold tabular-nums text-stone-900">
                      {servings}
                    </span>
                    <button
                      onClick={() => setServings((s) => s + 1)}
                      className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                      aria-label="Increase servings"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Grouped Ingredients */}
              <div className="mt-4 space-y-6">
                {recipe.ingredientGroups.map((group, groupIdx) => (
                  <div key={groupIdx}>
                    {group.groupTitle && (
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                        {group.groupTitle}
                      </h3>
                    )}
                    <ul className="space-y-2.5">
                      {group.items.map((ing, itemIdx) => {
                        const key = `${groupIdx}-${itemIdx}`;
                        const isChecked = !!checkedIngredients[key];
                        return (
                          <li
                            key={itemIdx}
                            onClick={() => toggleIngredient(key)}
                            className="flex items-start gap-2.5 text-sm cursor-pointer group select-none"
                          >
                            <span
                              className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                isChecked
                                  ? 'bg-emerald-800 border-emerald-800 text-white'
                                  : 'border-stone-300 bg-white group-hover:border-stone-400'
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3" />}
                            </span>
                            <span className={isChecked ? 'line-through text-stone-400' : 'text-stone-800'}>
                              <strong className="font-semibold text-stone-900">
                                {formatQuantity(ing.amount)} {ing.unit}
                              </strong>{' '}
                              <span>{ing.item}</span>
                              {ing.notes && (
                                <span className="text-xs text-stone-500 italic block">
                                  {ing.notes}
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition Facts Summary Card */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                Nutrition Profile (Per Serving)
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] flex justify-between">
                  <span className="text-stone-600">Calories:</span>
                  <span className="font-mono font-bold text-stone-900">{recipe.nutrition.calories} kcal</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] flex justify-between">
                  <span className="text-stone-600">Protein:</span>
                  <span className="font-mono font-bold text-emerald-900">{recipe.nutrition.protein}g</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] flex justify-between">
                  <span className="text-stone-600">Carbohydrates:</span>
                  <span className="font-mono font-bold text-stone-900">{recipe.nutrition.carbs}g</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] flex justify-between">
                  <span className="text-stone-600">Dietary Fiber:</span>
                  <span className="font-mono font-bold text-stone-900">{recipe.nutrition.fiber}g</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] flex justify-between">
                  <span className="text-stone-600">Healthy Fats:</span>
                  <span className="font-mono font-bold text-stone-900">{recipe.nutrition.fat}g</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] flex justify-between">
                  <span className="text-stone-600">Sodium:</span>
                  <span className="font-mono font-bold text-stone-900">{recipe.nutrition.sodium}mg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Cooking Instructions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs">
              <h2 className="text-xl font-serif font-bold text-stone-900 pb-4 border-b border-stone-200">
                Preparation Instructions
              </h2>

              <ol className="mt-6 space-y-6">
                {recipe.instructions.map((inst) => {
                  const done = !!completedSteps[inst.step];
                  return (
                    <li key={inst.step} className="flex gap-4 group">
                      <button
                        onClick={() => toggleStep(inst.step)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold font-mono transition-colors cursor-pointer ${
                          done
                            ? 'bg-emerald-800 text-white'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                        title={done ? 'Mark as incomplete' : 'Mark as done'}
                        aria-label={`Step ${inst.step} status`}
                      >
                        {done ? <CheckCircle2 className="w-4 h-4" /> : inst.step}
                      </button>

                      <div className="flex-1">
                        <h3 className={`text-sm font-bold ${done ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                          {inst.title}
                        </h3>
                        <p className={`mt-1 text-sm leading-relaxed ${done ? 'text-stone-400' : 'text-stone-700'}`}>
                          {inst.text}
                        </p>
                        {inst.tip && (
                          <div className="mt-2 p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-lg text-xs text-emerald-900 flex items-start gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span><strong>Chef Note:</strong> {inst.tip}</span>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Chef's Tips & Dietary Substitutions */}
            {recipe.chefTips && recipe.chefTips.length > 0 && (
              <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs">
                <h3 className="text-base font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-800" />
                  <span>Chef's Healthy Cooking Tips</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 list-disc list-inside">
                  {recipe.chefTips.map((tip, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Storage & Meal Prep Advice */}
            {recipe.storageAdvice && (
              <div className="p-4 bg-stone-100/70 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700">
                <span className="font-semibold text-stone-900 block mb-1">Meal Prep & Storage:</span>
                <p>{recipe.storageAdvice}</p>
              </div>
            )}
          </div>
        </div>

        {/* PART 2 SEO & AEO: At least 2 H2 question subheadings with concise answers */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs" aria-labelledby="recipe-faq-title">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-4">
            <HelpCircle className="w-4 h-4" />
            <span id="recipe-faq-title">Frequently Asked Questions & Nutritional Insights</span>
          </div>

          <div className="space-y-6">
            {recipe.aeoQuestions.map((qa, index) => (
              <div key={index} className="pb-4 border-b border-stone-100 last:border-b-0 last:pb-0">
                {/* H2 formatted question */}
                <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-2">
                  {qa.question}
                </h2>
                {/* 2-3 sentence direct answer */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Healthy Recipes Section */}
        {relatedRecipes.length > 0 && (
          <section className="pt-8 border-t border-stone-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">
              More Healthy Recipes You Might Enjoy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedRecipes.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelated(rel)}
                  className="group cursor-pointer bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all"
                >
                  <div className="aspect-4/3 overflow-hidden bg-stone-100">
                    <img
                      src={rel.image}
                      alt={rel.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3.5">
                    <div className="text-[11px] text-stone-500 font-medium mb-1">
                      {rel.category} · {rel.totalTimeMinutes}m
                    </div>
                    <h3 className="font-serif text-sm font-bold text-stone-900 group-hover:text-emerald-900 transition-colors line-clamp-1">
                      {rel.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
