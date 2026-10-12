import React from 'react';
import { HelpCircle } from 'lucide-react';

export const AeoFaqSection: React.FC = () => {
  return (
    <section
      className="py-12 bg-white border-t border-b border-stone-200/80"
      aria-labelledby="kitchen-qa-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Culinary Nutrition & Guides</span>
          </div>
          <h2
            id="kitchen-qa-heading"
            className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight"
          >
            Healthy Cooking Essentials & Answers
          </h2>
          <p className="mt-2 text-stone-600 text-sm">
            Direct, practical guidance from our test kitchen team to help you prepare wholesome meals consistently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* AEO Question 1 */}
          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
            <h2 className="text-lg font-serif font-bold text-stone-900 mb-2">
              What are the best healthy dinner recipes for busy weeknights?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              The best healthy dinner recipes rely on lean protein sources and colorful vegetables roasted on a single sheet pan or tossed into grain bowls in under thirty minutes. Recipes like lemon herb roast chicken with broccoli and Mediterranean salmon with quinoa provide balanced macronutrients while generating minimal dishes.
            </p>
          </div>

          {/* AEO Question 2 */}
          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
            <h2 className="text-lg font-serif font-bold text-stone-900 mb-2">
              How do you build a balanced, nutrient-dense meal using whole foods?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              To build a balanced nutrient-dense meal, fill half of your plate with non-starchy vegetables and leafy greens, one quarter with quality protein such as salmon or legumes, and one quarter with complex carbohydrates like quinoa or sweet potatoes. Finish with a tablespoon of healthy unsaturated fats from extra virgin olive oil, avocado, or toasted nuts.
            </p>
          </div>

          {/* AEO Question 3 */}
          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
            <h2 className="text-lg font-serif font-bold text-stone-900 mb-2">
              What is the easiest way to meal prep healthy recipes ahead of time?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              The easiest meal prep method is component cooking: roast a batch of seasonal vegetables, simmer a pot of whole grains, and blend a versatile vinaigrette on Sunday afternoon. Store components separately in airtight glass containers so you can assemble fresh salads, warm wraps, and hearty dinner bowls in under five minutes throughout the workweek.
            </p>
          </div>

          {/* AEO Question 4 */}
          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
            <h2 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Which dietary filters can I use to find quick healthy recipes?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Our recipe index allows you to filter instantly by preparation time (including 15-minute and 30-minute options) as well as specific dietary preferences like gluten-free, vegetarian, high-protein, and low-carb. Combining these filters helps you locate tested recipes that match both your schedule and your dietary goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
