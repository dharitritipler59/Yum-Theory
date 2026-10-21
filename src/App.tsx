/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { RECIPES_DATA } from './data/recipes';
import { Recipe, DietaryTag, SortOption } from './types/recipe';
import { Header } from './components/Header';
import { HeroIntro } from './components/HeroIntro';
import { RecipeGrid } from './components/RecipeGrid';
import { RecipeDetail } from './components/RecipeDetail';
import { AeoFaqSection } from './components/AeoFaqSection';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { NotFound } from './components/NotFound';

export default function App() {
  // Navigation & Path State (Supports clean slugs, 404 detection, and 301 redirects)
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const p = window.location.pathname;
    if (p === '/old-hone' || p === '/old-hone/' || p === '/old-home' || p === '/old-home/') {
      window.history.replaceState(null, '', '/');
      return '/';
    }
    return p;
  });

  const [activeSlug, setActiveSlug] = useState<string | null>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/recipes/')) {
      const slug = path.replace('/recipes/', '').replace(/\/$/, '');
      return slug || null;
    }
    return null;
  });

  // Filter & Search States
  const [selectedCategory, setSelectedCategory] = useState<string>('All Recipes');
  const [selectedDietary, setSelectedDietary] = useState<DietaryTag[]>([]);
  const [maxPrepTime, setMaxPrepTime] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [isSavedOnly, setIsSavedOnly] = useState<boolean>(false);

  // Saved Recipes (Persisted in LocalStorage)
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem('vt_saved_recipes');
      return stored ? new Set(JSON.parse(stored)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  // About Modal
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);

  // Active Recipe Lookup
  const activeRecipe = useMemo(() => {
    if (!activeSlug) return null;
    return RECIPES_DATA.find((r) => r.slug === activeSlug) || null;
  }, [activeSlug]);

  // Check if current route is 404
  const isNotFound = useMemo(() => {
    if (currentPath === '/' || currentPath === '') return false;
    if (currentPath.startsWith('/recipes/')) {
      const slug = currentPath.replace('/recipes/', '').replace(/\/$/, '');
      return !RECIPES_DATA.some((r) => r.slug === slug);
    }
    return true;
  }, [currentPath]);

  // Handle Browser Back / Forward buttons with popstate and 301 redirects
  useEffect(() => {
    const handlePopState = () => {
      let path = window.location.pathname;
      if (path === '/old-hone' || path === '/old-hone/' || path === '/old-home' || path === '/old-home/') {
        window.history.replaceState(null, '', '/');
        path = '/';
      }
      setCurrentPath(path);
      if (path.startsWith('/recipes/')) {
        const slug = path.replace('/recipes/', '').replace(/\/$/, '');
        setActiveSlug(slug || null);
      } else {
        setActiveSlug(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL and SEO metadata dynamically
  useEffect(() => {
    let title = 'Healthy Recipes – Yum Theory';
    let description =
      'Explore approachable healthy recipes, seasonal plant-forward meals, and nourishing weeknight dinners made with simple ingredients and easy cooking techniques. Discover delicious weight-loss-friendly meals that make eating well effortless.';

    if (isNotFound) {
      title = 'Page Not Found (404) – Yum Theory';
      description =
        'The recipe or page you were looking for could not be found. Explore our healthy recipe collection on Yum Theory.';
    } else if (activeRecipe) {
      title = `${activeRecipe.title} – Yum Theory`;
      description = activeRecipe.metaDescription;
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Self-referencing canonical tag on every page
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const baseOrigin =
      window.location.origin.includes('localhost') || window.location.origin.includes('run.app')
        ? 'https://yum-theory.vercel.app'
        : window.location.origin;

    let canonicalPath = '/';
    if (activeRecipe) {
      canonicalPath = `/recipes/${activeRecipe.slug}`;
    } else if (isNotFound) {
      canonicalPath = currentPath;
    }
    const fullCanonicalUrl = `${baseOrigin}${canonicalPath}`;
    canonical.setAttribute('href', fullCanonicalUrl);

    // Update OpenGraph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', fullCanonicalUrl);

    // Update Schema.org JSON-LD
    let scriptTag = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    if (activeRecipe) {
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: activeRecipe.title,
        description: activeRecipe.dek,
        image: [activeRecipe.image],
        author: {
          '@type': 'Person',
          name: activeRecipe.author.name,
        },
        datePublished: activeRecipe.publishedDate,
        prepTime: `PT${activeRecipe.prepTimeMinutes}M`,
        cookTime: `PT${activeRecipe.cookTimeMinutes}M`,
        totalTime: `PT${activeRecipe.totalTimeMinutes}M`,
        recipeYield: `${activeRecipe.baseServings} servings`,
        recipeCategory: activeRecipe.category,
        nutrition: {
          '@type': 'NutritionInformation',
          calories: `${activeRecipe.nutrition.calories} calories`,
          proteinContent: `${activeRecipe.nutrition.protein} grams`,
          carbohydrateContent: `${activeRecipe.nutrition.carbs} grams`,
          fatContent: `${activeRecipe.nutrition.fat} grams`,
          fiberContent: `${activeRecipe.nutrition.fiber} grams`,
        },
        recipeIngredient: activeRecipe.ingredientGroups.flatMap((g) =>
          g.items.map((i) => `${i.amount} ${i.unit} ${i.item}`)
        ),
        recipeInstructions: activeRecipe.instructions.map((ins) => ({
          '@type': 'HowToStep',
          name: ins.title,
          text: ins.text,
        })),
      };
      scriptTag.text = JSON.stringify(schemaData);
    } else {
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Healthy Recipes',
        description:
          'Explore approachable healthy recipes, seasonal plant-forward meals, and nourishing weeknight dinners.',
        publisher: {
          '@type': 'Organization',
          name: 'Yum Theory',
        },
        hasPart: RECIPES_DATA.map((r) => ({
          '@type': 'Recipe',
          name: r.title,
          url: `${window.location.origin}/recipes/${r.slug}`,
          image: r.image,
        })),
      };
      scriptTag.text = JSON.stringify(schemaData);
    }
  }, [activeRecipe, isNotFound, currentPath]);

  // Navigate to Recipe Detail with clean slug URL
  const handleSelectRecipe = useCallback((recipe: Recipe) => {
    setActiveSlug(recipe.slug);
    setCurrentPath(`/recipes/${recipe.slug}`);
    window.history.pushState(null, '', `/recipes/${recipe.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Navigate back to Homepage
  const handleNavigateHome = useCallback(() => {
    setActiveSlug(null);
    setCurrentPath('/');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Toggle Saved / Bookmarked Recipe
  const handleToggleSave = useCallback((recipeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(recipeId)) {
        next.delete(recipeId);
      } else {
        next.add(recipeId);
      }
      try {
        localStorage.setItem('vt_saved_recipes', JSON.stringify(Array.from(next)));
      } catch {
        // LocalStorage fallback
      }
      return next;
    });
  }, []);

  // Filter Categories
  const handleSelectCategory = useCallback((cat: string) => {
    setSelectedCategory(cat);
    if (activeSlug) {
      handleNavigateHome();
    }
  }, [activeSlug, handleNavigateHome]);

  const handleToggleDietary = useCallback((tag: DietaryTag) => {
    setSelectedDietary((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const handleResetFilters = useCallback(() => {
    setSelectedCategory('All Recipes');
    setSelectedDietary([]);
    setMaxPrepTime(null);
    setSearchQuery('');
    setIsSavedOnly(false);
  }, []);

  const hasActiveFilters = useMemo(() => {
    return (
      selectedCategory !== 'All Recipes' ||
      selectedDietary.length > 0 ||
      maxPrepTime !== null ||
      searchQuery.trim() !== '' ||
      isSavedOnly
    );
  }, [selectedCategory, selectedDietary, maxPrepTime, searchQuery, isSavedOnly]);

  // Filter and Sort Recipes
  const filteredRecipes = useMemo(() => {
    return RECIPES_DATA.filter((recipe) => {
      // Saved Only Filter
      if (isSavedOnly && !savedIds.has(recipe.id)) {
        return false;
      }

      // Category Filter
      if (selectedCategory !== 'All Recipes') {
        if (selectedCategory === 'Breakfast' && recipe.category !== 'Breakfast') return false;
        if (selectedCategory === 'Lunch' && recipe.category !== 'Lunch') return false;
        if (selectedCategory === 'Dinner' && recipe.category !== 'Dinner') return false;
        if (selectedCategory === 'Salads' && recipe.category !== 'Salads') return false;
        if (selectedCategory === 'Healthy Snacks' && recipe.category !== 'Healthy Snacks' && !recipe.isQuickAndEasy) return false;
        if (selectedCategory === 'Vegetarian' && !recipe.dietaryTags.includes('Vegetarian')) return false;
        if (selectedCategory === 'High Protein' && !recipe.dietaryTags.includes('High Protein') && recipe.nutrition.protein < 25) return false;
        if (selectedCategory === 'Quick and Easy' && !recipe.isQuickAndEasy && recipe.totalTimeMinutes > 30) return false;
        if (selectedCategory === 'Low-Carb' && !recipe.dietaryTags.includes('Low-Carb') && recipe.nutrition.carbs > 25) return false;
      }

      // Dietary Multi-select Filters
      if (selectedDietary.length > 0) {
        const matchesAll = selectedDietary.every((tag) => {
          if (tag === 'High Protein') {
            return recipe.dietaryTags.includes('High Protein') || recipe.nutrition.protein >= 25;
          }
          if (tag === 'Low-Carb') {
            return recipe.dietaryTags.includes('Low-Carb') || recipe.nutrition.carbs <= 25;
          }
          return recipe.dietaryTags.includes(tag);
        });
        if (!matchesAll) return false;
      }

      // Prep Time / Total Time Filter
      if (maxPrepTime !== null && recipe.totalTimeMinutes > maxPrepTime) {
        return false;
      }

      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = recipe.title.toLowerCase().includes(q);
        const matchesDek = recipe.dek.toLowerCase().includes(q);
        const matchesCategory = recipe.category.toLowerCase().includes(q);
        const matchesTags = recipe.dietaryTags.some((t) => t.toLowerCase().includes(q));
        const matchesIngredients = recipe.ingredientGroups.some((g) =>
          g.items.some((i) => i.item.toLowerCase().includes(q))
        );

        if (!matchesTitle && !matchesDek && !matchesCategory && !matchesTags && !matchesIngredients) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'quickest') {
        return a.totalTimeMinutes - b.totalTimeMinutes;
      }
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'newest') {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      }
      // 'popular'
      return b.rating * b.reviewCount - a.rating * a.reviewCount;
    });
  }, [selectedCategory, selectedDietary, maxPrepTime, searchQuery, sortBy, isSavedOnly, savedIds]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Universal Top Bar */}
      <Header
        currentCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onNavigateHome={handleNavigateHome}
        onOpenAbout={() => setAboutOpen(true)}
        savedCount={savedIds.size}
        onToggleSavedOnly={() => setIsSavedOnly((prev) => !prev)}
        isSavedOnly={isSavedOnly}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isNotFound ? (
          /* Friendly Custom 404 Page */
          <NotFound
            onNavigateHome={handleNavigateHome}
            onSelectRecipe={handleSelectRecipe}
            onSearch={(q) => {
              setSearchQuery(q);
              handleNavigateHome();
            }}
          />
        ) : activeRecipe ? (
          /* Recipe Detail Page View */
          <RecipeDetail
            recipe={activeRecipe}
            onBack={handleNavigateHome}
            onSelectRelated={handleSelectRecipe}
            allRecipes={RECIPES_DATA}
            isSaved={savedIds.has(activeRecipe.id)}
            onToggleSave={handleToggleSave}
          />
        ) : (
          /* Healthy Recipes Main Editorial Listing View */
          <>
            {/* Page Introduction (Single H1, SEO Description, Recipe Search) */}
            <HeroIntro
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalRecipeCount={RECIPES_DATA.length}
            />

            {/* Main Recipe Grid & Collection Controls */}
            <RecipeGrid
              recipes={filteredRecipes}
              totalFilteredCount={filteredRecipes.length}
              totalCatalogCount={RECIPES_DATA.length}
              activeCategory={selectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onSelectRecipe={handleSelectRecipe}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
              onResetFilters={handleResetFilters}
            />

            {/* AEO Question & Answer Editorial Section */}
            <AeoFaqSection />
          </>
        )}
      </main>

      {/* Understated Editorial Footer */}
      <Footer
        onOpenAbout={() => setAboutOpen(true)}
        onSelectCategory={handleSelectCategory}
        onNavigateHome={handleNavigateHome}
      />

      {/* About & Philosophy Modal */}
      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />
    </div>
  );
}
