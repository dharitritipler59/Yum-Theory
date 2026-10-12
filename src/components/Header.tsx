import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  currentCategory: string;
  onSelectCategory: (cat: string) => void;
  onNavigateHome: () => void;
  onOpenAbout: () => void;
  savedCount: number;
  onToggleSavedOnly: () => void;
  isSavedOnly: boolean;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onOpenAbout,
  onSelectCategory,
  savedCount,
  onToggleSavedOnly,
  isSavedOnly,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerSearchOpen, setHeaderSearchOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-6">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left group focus-visible:ring-1 focus-visible:ring-emerald-700 rounded-sm"
            aria-label="Yum Theory Homepage"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-900 text-stone-100 flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-4 h-4 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 leading-none group-hover:text-emerald-900 transition-colors whitespace-nowrap">
                Yum Theory
              </span>
              <span className="text-[10px] tracking-normal font-sans text-stone-500 font-medium">
                A better way to eat every day.
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              onClick={onNavigateHome}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-800"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                const el = document.getElementById('recipe-collection');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-800"
            >
              Recipes
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('Vegetarian');
                const el = document.getElementById('recipe-collection');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-800"
            >
              Plant-Based
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('Quick and Easy');
                const el = document.getElementById('recipe-collection');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-800"
            >
              Quick & Easy
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-800"
            >
              Philosophy
            </button>
          </nav>

          {/* Zone 3: Primary Actions (Search & Saved Collection) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Header Search Expansion */}
            <div className="relative">
              {headerSearchOpen ? (
                <div className="flex items-center bg-white border border-stone-300 rounded-full px-3 py-1.5 shadow-xs w-48 sm:w-64 transition-all">
                  <Search className="w-4 h-4 text-stone-400 shrink-0 mr-2" />
                  <input
                    type="search"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    autoFocus
                    className="w-full text-xs text-stone-800 bg-transparent focus:outline-hidden"
                  />
                  <button
                    onClick={() => {
                      setHeaderSearchOpen(false);
                    }}
                    className="text-stone-400 hover:text-stone-600 ml-1 p-0.5"
                    aria-label="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setHeaderSearchOpen(true)}
                  className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-full transition-colors"
                  aria-label="Open recipe search"
                  title="Search recipes"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Saved Recipes Counter Button */}
            <button
              onClick={onToggleSavedOnly}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                isSavedOnly
                  ? 'bg-emerald-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
              title={isSavedOnly ? 'Showing saved recipes only' : 'View saved recipes'}
              aria-label={`Saved recipes (${savedCount})`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSavedOnly ? 'fill-white' : ''}`} />
              <span className="hidden sm:inline">Saved</span>
              <span className="text-[11px] font-mono tabular-nums opacity-80">({savedCount})</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF9F5] px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick(onNavigateHome)}
              className="w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => {
                handleNavClick(() => {
                  onNavigateHome();
                  const el = document.getElementById('recipe-collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                });
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              All Recipes
            </button>
            <button
              onClick={() => {
                handleNavClick(() => {
                  onNavigateHome();
                  onSelectCategory('Vegetarian');
                });
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Plant-Based Meals
            </button>
            <button
              onClick={() => {
                handleNavClick(() => {
                  onNavigateHome();
                  onSelectCategory('Quick and Easy');
                });
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Quick & Easy (Under 30 Min)
            </button>
            <button
              onClick={() => handleNavClick(onOpenAbout)}
              className="w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Editorial Philosophy & Standards
            </button>
          </div>

          <div className="pt-2 border-t border-stone-200">
            <p className="text-xs text-stone-500 mb-2">Search the Test Kitchen:</p>
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="search"
                placeholder="Search by ingredient or dish..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-emerald-700"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
