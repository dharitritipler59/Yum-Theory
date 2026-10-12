import React, { useState } from 'react';
import { UtensilsCrossed, Send, Check } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onSelectCategory: (cat: string) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAbout,
  onSelectCategory,
  onNavigateHome,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-800 text-stone-100 flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-100">
                Yum Theory
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              A better way to eat every day. We test each formula to ensure everyday meals are flavorful, restorative, and easy to master.
            </p>

            <div className="pt-2 text-xs text-stone-500">
              Tested & published in accordance with Evidence-Based Dietary Guidelines.
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              Explore Recipes
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => {
                    onNavigateHome();
                    onSelectCategory('Breakfast');
                  }}
                  className="hover:text-stone-100 transition-colors"
                >
                  Energizing Breakfasts
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateHome();
                    onSelectCategory('Lunch');
                  }}
                  className="hover:text-stone-100 transition-colors"
                >
                  Midday Bowls & Wraps
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateHome();
                    onSelectCategory('Dinner');
                  }}
                  className="hover:text-stone-100 transition-colors"
                >
                  Nutrient-Dense Dinners
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateHome();
                    onSelectCategory('Vegetarian');
                  }}
                  className="hover:text-stone-100 transition-colors"
                >
                  Plant-Forward Mains
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateHome();
                    onSelectCategory('Salads');
                  }}
                  className="hover:text-stone-100 transition-colors"
                >
                  Seasonal Crisp Salads
                </button>
              </li>
            </ul>
          </div>

          {/* Publication Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              Editorial
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-stone-100 transition-colors"
                >
                  About the Test Kitchen
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-stone-100 transition-colors"
                >
                  Nutrition Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-stone-100 transition-colors"
                >
                  Culinary Team
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-stone-100 transition-colors"
                >
                  Editorial Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              The Weekly Table
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Receive 3 tested healthy recipes and a seasonal shopping guide every Sunday morning.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-xs text-stone-100 placeholder:text-stone-500 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-md text-xs font-medium transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the table! Check your inbox.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Yum Theory. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenAbout} className="hover:text-stone-400 transition-colors">
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={onOpenAbout} className="hover:text-stone-400 transition-colors">
              Terms of Use
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={onOpenAbout} className="hover:text-stone-400 transition-colors">
              Nutritional Disclaimers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
