import React from 'react';
import { X, UtensilsCrossed, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div
        className="bg-[#FAF9F5] border border-stone-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl relative text-stone-800"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/50 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-900 text-stone-100 flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-emerald-300" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
            Yum Theory
          </span>
        </div>

        <h2
          id="about-modal-title"
          className="text-2xl font-serif font-bold text-stone-900 tracking-tight mb-3"
        >
          Our Nutrition & Editorial Standards
        </h2>

        <p className="text-sm text-stone-600 leading-relaxed mb-6">
          Founded as an antidote to rigid diets and hyper-processed convenience foods, Yum Theory is a dedicated food publication creating approachable, tested recipes centered on whole, vibrant ingredients.
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3 p-3.5 bg-white rounded-xl border border-stone-200/80">
            <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-stone-900">Real Kitchen Testing</h3>
              <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                Every recipe is prepared multiple times with standard home kitchen equipment. Cooking times, yields, and texture cues are verified for accuracy.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3.5 bg-white rounded-xl border border-stone-200/80">
            <HeartPulse className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-stone-900">Evidence-Grounded Nutrition</h3>
              <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                We prioritize whole grains, legumes, wild seafood, unsaturated plant oils, and fiber-rich greens. We do not invent fake superfood claims or promote restrictive crash dieting.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3.5 bg-white rounded-xl border border-stone-200/80">
            <Sparkles className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-stone-900">Inclusive Dietary Flexibility</h3>
              <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                Whether you follow a vegan, gluten-free, dairy-free, or Mediterranean diet, each recipe includes practical substitutions to suit your household.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-900 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
};
