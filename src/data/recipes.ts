import salmonBowlImg from '@/src/assets/images/mediterranean_salmon_bowl_1791808518420.jpg';
import lentilSoupImg from '@/src/assets/images/golden_lentil_turmeric_soup_1791808540765.jpg';
import kaleSaladImg from '@/src/assets/images/roasted_chickpea_kale_salad_1791808564223.jpg';
import goddessWrapImg from '@/src/assets/images/avocado_green_goddess_wrap_1791808576372.jpg';
import chiaOatsImg from '@/src/assets/images/berry_chia_overnight_oats_1791808586851.jpg';
import sheetChickenImg from '@/src/assets/images/sheet_pan_herb_chicken_1791808626248.jpg';
import smoothieBowlImg from '@/src/assets/images/matcha_green_smoothie_bowl_1791808638495.jpg';
import cauliflowerTacosImg from '@/src/assets/images/roasted_cauliflower_tacos_1791808650741.jpg';

import { Recipe } from '../types/recipe';

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'rec-01',
    slug: 'mediterranean-salmon-quinoa-bowl',
    title: 'Mediterranean Salmon Quinoa Bowl',
    dek: 'Crispy herb-crusted wild salmon over warm fluffy quinoa with creamy avocado, sweet heirloom tomatoes, and lemon tahini vinaigrette.',
    metaDescription: 'Discover this Mediterranean salmon quinoa bowl packed with wild salmon, ripe avocado, crisp cucumbers, and citrus dressing for a high-protein dinner.',
    image: salmonBowlImg,
    imageAlt: 'Pan-seared wild salmon fillet seasoned with herbs resting on fluffy quinoa with sliced avocado, diced cucumber, and halved cherry tomatoes in a ceramic bowl.',
    category: 'Dinner',
    dietaryTags: ['High Protein', 'Gluten-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    totalTimeMinutes: 30,
    baseServings: 2,
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 142,
    isQuickAndEasy: false,
    isFeatured: true,
    publishedDate: '2026-03-14',
    author: {
      name: 'Elena Rostova',
      role: 'Culinary Nutritionist & Recipe Editor',
    },
    nutrition: {
      calories: 520,
      protein: 38,
      carbs: 42,
      fat: 22,
      fiber: 9,
      sodium: 380,
      sugar: 5,
    },
    aeoQuestions: [
      {
        question: 'What makes this Mediterranean salmon bowl healthy?',
        answer: 'This bowl delivers 38 grams of lean protein and essential omega-3 fatty acids from wild-caught salmon, paired with slow-burning complex carbohydrates and dietary fiber from fluffy whole grain quinoa.',
      },
      {
        question: 'Can you meal prep and store this salmon bowl in advance?',
        answer: 'Yes. Cook the quinoa and sear the salmon up to three days ahead. Store the dressing and fresh vegetables separately in airtight containers, assembling just before serving to maintain crispness.',
      },
      {
        question: 'What dietary swaps can be made for this recipe?',
        answer: 'For a plant-based alternative, swap the salmon fillet for crispy marinated tempeh or roasted spiced chickpeas. Quinoa can also be replaced with brown rice or cauliflower rice for lower carbohydrate counts.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Salmon & Quinoa Base',
        items: [
          { amount: 2, unit: 'fillets (6 oz each)', item: 'Wild Alaskan salmon', notes: 'Skin-on preferred' },
          { amount: 1, unit: 'cup', item: 'Dry quinoa', notes: 'Rinsed well' },
          { amount: 2, unit: 'cups', item: 'Low-sodium vegetable broth', notes: 'Or filtered water' },
          { amount: 1, unit: 'tbsp', item: 'Extra virgin olive oil', notes: 'First cold-pressed' },
          { amount: 1, unit: 'tsp', item: 'Dried oregano and thyme blend' },
          { amount: 0.5, unit: 'tsp', item: 'Sea salt and cracked black pepper' },
        ],
      },
      {
        groupTitle: 'Fresh Produce & Toppings',
        items: [
          { amount: 1, unit: 'medium', item: 'Hass avocado', notes: 'Pitted and sliced thin' },
          { amount: 1, unit: 'cup', item: 'Persian cucumbers', notes: 'Diced small' },
          { amount: 1, unit: 'cup', item: 'Heirloom cherry tomatoes', notes: 'Halved' },
          { amount: 2, unit: 'tbsp', item: 'Toasted pine nuts', notes: 'Lightly golden' },
          { amount: 2, unit: 'tbsp', item: 'Fresh dill and flat-leaf parsley', notes: 'Finely chopped' },
        ],
      },
      {
        groupTitle: 'Lemon Herb Tahini Dressing',
        items: [
          { amount: 3, unit: 'tbsp', item: 'Running sesame tahini' },
          { amount: 2, unit: 'tbsp', item: 'Fresh lemon juice', notes: 'Approx. 1 juicy lemon' },
          { amount: 1, unit: 'clove', item: 'Garlic', notes: 'Grated microplane' },
          { amount: 3, unit: 'tbsp', item: 'Warm water', notes: 'To thin to pouring consistency' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Cook the Fluffy Quinoa',
        text: 'Combine rinsed quinoa and vegetable broth in a small saucepan. Bring to a gentle boil over medium-high heat, then reduce to low, cover with a tight lid, and simmer for 15 minutes until liquid is absorbed. Remove from heat and let steam covered for 5 minutes, then fluff with a fork.',
        tip: 'Rinsing quinoa removes its natural bitter saponin coating.',
      },
      {
        step: 2,
        title: 'Whisk the Lemon Tahini Sauce',
        text: 'In a small glass bowl, whisk together tahini, fresh lemon juice, grated garlic, and a pinch of salt. Slowly stream in warm water one tablespoon at a time until the dressing turns pale and reaches a creamy, pourable consistency.',
      },
      {
        step: 3,
        title: 'Sear the Herb Salmon',
        text: 'Pat salmon fillets dry with paper towels. Rub each side with olive oil, dried oregano, thyme, salt, and pepper. Heat a cast-iron skillet over medium-high heat. Place salmon skin-side down and sear for 4 to 5 minutes until crispy. Flip and cook for another 3 to 4 minutes until medium-rare to medium.',
      },
      {
        step: 4,
        title: 'Assemble and Garnish',
        text: 'Divide the warm quinoa between two wide shallow bowls. Arrange sliced avocado, diced cucumber, and halved tomatoes beside the quinoa. Rest a seared salmon fillet in the center, drizzle generously with lemon tahini, and finish with toasted pine nuts and fresh herbs.',
      },
    ],
    chefTips: [
      'Look for wild coho or sockeye salmon for richer color and maximum anti-inflammatory omega-3 content.',
      'Toast pine nuts in a dry pan over low heat for 2 minutes—watch closely as they burn quickly.',
      'Store any remaining tahini dressing in an airtight jar in the refrigerator for up to 5 days.',
    ],
    storageAdvice: 'Keep cooked quinoa and salmon in glass airtight containers in the refrigerator for up to 3 days. Reheat salmon gently on the stovetop over low heat or enjoy chilled over cold greens.',
  },
  {
    id: 'rec-02',
    slug: 'golden-turmeric-lentil-soup',
    title: 'Golden Turmeric Lentil Soup',
    dek: 'Warming red lentils simmered with freshly grated turmeric root, ginger, coconut cream, and toasted pumpkin seed garnish.',
    metaDescription: 'Make this restorative golden turmeric lentil soup filled with ginger, coconut milk, and pumpkin seeds for a comforting, antioxidant-rich vegan dinner.',
    image: lentilSoupImg,
    imageAlt: 'Steaming yellow golden lentil soup in a ceramic bowl topped with coconut cream swirl, toasted pumpkin seeds, and fresh green cilantro leaves.',
    category: 'Soups',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    totalTimeMinutes: 35,
    baseServings: 4,
    difficulty: 'Easy',
    rating: 4.8,
    reviewCount: 98,
    isQuickAndEasy: false,
    publishedDate: '2026-03-02',
    author: {
      name: 'Marcus Vance',
      role: 'Executive Wellness Chef',
    },
    nutrition: {
      calories: 340,
      protein: 18,
      carbs: 46,
      fat: 10,
      fiber: 14,
      sodium: 410,
      sugar: 4,
    },
    aeoQuestions: [
      {
        question: 'Why is turmeric combined with black pepper in this soup?',
        answer: 'Black pepper contains piperine, an active compound that increases the human body absorption of turmeric curcumin by up to 2000 percent, maximizing its potent anti-inflammatory properties.',
      },
      {
        question: 'Can you freeze this lentil soup for meal prep?',
        answer: 'Yes, this lentil soup freezes exceptionally well. Let it cool completely, portion into freezer-safe glass containers, and freeze for up to three months. Thaw overnight in the fridge before reheating.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Aromatics & Spices',
        items: [
          { amount: 1, unit: 'tbsp', item: 'Virgin coconut oil', notes: 'Or olive oil' },
          { amount: 1, unit: 'medium', item: 'Yellow onion', notes: 'Finely diced' },
          { amount: 3, unit: 'cloves', item: 'Garlic', notes: 'Minced' },
          { amount: 1.5, unit: 'tbsp', item: 'Fresh ginger root', notes: 'Finely grated' },
          { amount: 1, unit: 'tbsp', item: 'Ground turmeric', notes: 'Or 2 tbsp fresh grated root' },
          { amount: 1, unit: 'tsp', item: 'Ground cumin' },
          { amount: 0.5, unit: 'tsp', item: 'Ground coriander' },
          { amount: 0.25, unit: 'tsp', item: 'Freshly cracked black pepper', notes: 'Essential for curcumin absorption' },
        ],
      },
      {
        groupTitle: 'Soup Body',
        items: [
          { amount: 1.5, unit: 'cups', item: 'Split red lentils', notes: 'Rinsed until water runs clear' },
          { amount: 4, unit: 'cups', item: 'Low-sodium vegetable broth' },
          { amount: 1, unit: 'can (13.5 oz)', item: 'Light coconut milk', notes: 'Unsweetened' },
          { amount: 1, unit: 'tbsp', item: 'Fresh lime juice' },
        ],
      },
      {
        groupTitle: 'Garnish',
        items: [
          { amount: 3, unit: 'tbsp', item: 'Toasted pepitas (pumpkin seeds)' },
          { amount: 0.25, unit: 'cup', item: 'Fresh cilantro leaves', notes: 'Roughly torn' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Sauté the Aromatics',
        text: 'Warm coconut oil in a heavy Dutch oven over medium heat. Add diced onion and cook for 5 minutes until soft and translucent. Stir in minced garlic, grated ginger, ground turmeric, cumin, coriander, and black pepper. Stir continuously for 60 seconds until fragrant.',
      },
      {
        step: 2,
        title: 'Simmer the Lentils',
        text: 'Pour in the rinsed red lentils and vegetable broth. Bring to a rolling boil, then lower the heat to medium-low, cover partially, and simmer gently for 20 minutes until the lentils are soft and tender.',
      },
      {
        step: 3,
        title: 'Incorporate Coconut Cream',
        text: 'Pour in coconut milk, reserving 2 tablespoons for swirling garnish. Stir thoroughly and cook for another 3 minutes. Blend partially with an immersion blender for 10 seconds if you prefer a silkier texture, or leave textured.',
      },
      {
        step: 4,
        title: 'Season and Serve',
        text: 'Stir in fresh lime juice and season with sea salt to taste. Ladle into shallow bowls, drizzle each with reserved coconut cream, and top generously with toasted pumpkin seeds and fresh cilantro.',
      },
    ],
    chefTips: [
      'Red split lentils break down quickly without needing pre-soaking, making this soup ideal for weeknight dinners.',
      'Squeeze lime juice right at the end to keep the bright citrus notes from cooking off.',
    ],
    storageAdvice: 'Refrigerate in sealed containers for up to 5 days, or freeze for up to 3 months. Lentils will absorb broth as they sit, so add a splash of water when reheating.',
  },
  {
    id: 'rec-03',
    slug: 'roasted-chickpea-kale-salad',
    title: 'Roasted Chickpea Tuscan Kale Salad Recipe',
    dek: 'chickpea salad recipe made with protein-rich roasted chickpeas, fresh Tuscan kale, crunchy radishes, and creamy lemon tahini dressing. This easy vegetarian recipe combines Indian-inspired spices with fresh ingredients to create a satisfying, protein-packed meal for lunch, dinner, or any time of the day.',
    metaDescription: 'Protein-packed chickpea salad recipe made with roasted chickpeas, Tuscan kale, crunchy radishes, and lemon tahini dressing. An easy vegetarian meal.',
    image: kaleSaladImg,
    imageAlt: 'Vibrant bowl of massaged Tuscan kale salad with golden roasted chickpeas, sliced radishes, shaved parmesan, and toasted seeds.',
    category: 'Salads',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High Protein'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    baseServings: 3,
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 115,
    isQuickAndEasy: false,
    publishedDate: '2026-02-28',
    author: {
      name: 'Elena Rostova',
      role: 'Culinary Nutritionist & Recipe Editor',
    },
    nutrition: {
      calories: 390,
      protein: 16,
      carbs: 38,
      fat: 21,
      fiber: 12,
      sodium: 360,
      sugar: 3,
    },
    aeoQuestions: [
      {
        question: 'How do you massage kale so it is not bitter or tough?',
        answer: 'Remove the tough woody stems, chop the leaves into bite-sized ribbons, and drizzle with a teaspoon of olive oil and a pinch of salt. Rub the leaves between your fingers for two minutes until they turn dark green and silky tender.',
      },
      {
        question: 'How do you get chickpeas truly crispy for salads?',
        answer: 'Thoroughly dry rinsed canned chickpeas on a clean kitchen towel before tossing with oil and spices. Roast at 400°F (200°C) for 20 to 25 minutes, then let them cool on the baking sheet to firm up completely.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Crispy Roasted Chickpeas',
        items: [
          { amount: 1, unit: 'can (15 oz)', item: 'Chickpeas (garbanzo beans)', notes: 'Rinsed, drained, and thoroughly dried' },
          { amount: 1, unit: 'tbsp', item: 'Extra virgin olive oil' },
          { amount: 0.5, unit: 'tsp', item: 'Smoked paprika' },
          { amount: 0.5, unit: 'tsp', item: 'Ground cumin' },
          { amount: 0.25, unit: 'tsp', item: 'Garlic powder and fine sea salt' },
        ],
      },
      {
        groupTitle: 'Kale Base & Vegetables',
        items: [
          { amount: 2, unit: 'bunches', item: 'Lacinato (dino) kale', notes: 'Stems stripped, leaves chopped' },
          { amount: 4, unit: 'small', item: 'Red radishes', notes: 'Sliced paper thin on a mandoline' },
          { amount: 0.5, unit: 'cup', item: 'Shaved Parmigiano-Reggiano', notes: 'Or nutritional yeast for vegan' },
          { amount: 2, unit: 'tbsp', item: 'Toasted sunflower seeds' },
        ],
      },
      {
        groupTitle: 'Creamy Lemon Dressing',
        items: [
          { amount: 0.25, unit: 'cup', item: 'Extra virgin olive oil' },
          { amount: 2, unit: 'tbsp', item: 'Fresh lemon juice' },
          { amount: 1, unit: 'tsp', item: 'Dijon mustard' },
          { amount: 1, unit: 'tsp', item: 'Pure maple syrup' },
          { amount: 1, unit: 'clove', item: 'Garlic', notes: 'Finely grated' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Roast the Spiced Chickpeas',
        text: 'Preheat oven to 400°F (200°C). Roll chickpeas in a clean kitchen towel to remove moisture and loose skins. Toss with olive oil, smoked paprika, cumin, garlic powder, and salt. Spread evenly on a rimmed baking sheet and roast for 20 minutes until golden and crunchy.',
      },
      {
        step: 2,
        title: 'Massage the Tuscan Kale',
        text: 'Place chopped kale in a large mixing bowl. Add half a teaspoon of olive oil and a pinch of salt. Massage leaves with clean hands for 90 seconds until the volume reduces by a third and leaves turn deep emerald.',
      },
      {
        step: 3,
        title: 'Shake the Dressing',
        text: 'In a mason jar, combine olive oil, lemon juice, Dijon mustard, maple syrup, grated garlic, and a pinch of salt and pepper. Shake vigorously until emulsified.',
      },
      {
        step: 4,
        title: 'Toss and Present',
        text: 'Pour the dressing over the massaged kale and toss well. Layer in thin radish slices, crunchy roasted chickpeas, and shaved parmesan curls. Garnish with sunflower seeds and serve immediately.',
      },
    ],
    chefTips: [
      'Unlike delicate lettuces, dressed kale will stay crunchy in the fridge for up to 3 days without wilting.',
      'Allow chickpeas to cool 10 minutes before placing on kale so they do not steam the greens.',
    ],
    storageAdvice: 'Store dressed kale salad in an airtight glass container for up to 3 days. Keep extra chickpeas in a paper-lined container at room temperature so they remain crisp.',
  },
  {
    id: 'rec-04',
    slug: 'green-goddess-avocado-wrap',
    title: 'Green Goddess Avocado Sprout Wrap',
    dek: 'Wholesome sprouted grain wraps layered with creamy herb greek yogurt spread, ripe avocado slices, crisp cucumbers, and tender microgreens.',
    metaDescription: 'Fresh green goddess avocado wrap packed with herb yogurt spread, baby spinach, crisp cucumber, and alfalfa sprouts. Quick 15-minute healthy lunch.',
    image: goddessWrapImg,
    imageAlt: 'Two halves of a sliced whole-grain green goddess wrap displaying vibrant layers of avocado, fresh baby spinach, crisp cucumber ribbons, and microgreens on a wood cutting board.',
    category: 'Lunch',
    dietaryTags: ['Vegetarian', 'Quick and Easy'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    totalTimeMinutes: 15,
    baseServings: 2,
    difficulty: 'Easy',
    rating: 4.7,
    reviewCount: 76,
    isQuickAndEasy: true,
    publishedDate: '2026-03-08',
    author: {
      name: 'Sofia Chen',
      role: 'Holistic Recipe Developer',
    },
    nutrition: {
      calories: 380,
      protein: 15,
      carbs: 41,
      fat: 19,
      fiber: 11,
      sodium: 320,
      sugar: 3,
    },
    aeoQuestions: [
      {
        question: 'What are the best whole-grain wraps for healthy eating?',
        answer: 'Opt for sprouted whole-grain tortillas, 100 percent whole-wheat wraps, or gluten-free seed wraps with at least 4 grams of dietary fiber and zero added sugars or hydrogenated oils.',
      },
      {
        question: 'How do you prevent vegetable wraps from becoming soggy?',
        answer: 'Pat all sliced vegetables and greens dry with a paper towel, spread the yogurt sauce only on the inner layer of the tortilla, and place broad dry spinach leaves directly against the wrap as a moisture barrier.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Green Goddess Herb Spread',
        items: [
          { amount: 0.5, unit: 'cup', item: 'Plain whole-milk Greek yogurt', notes: 'Or dairy-free coconut yogurt' },
          { amount: 0.25, unit: 'cup', item: 'Fresh herbs (chives, parsley, dill)', notes: 'Minced' },
          { amount: 1, unit: 'tbsp', item: 'Lemon juice' },
          { amount: 1, unit: 'tbsp', item: 'Extra virgin olive oil' },
          { amount: 1, unit: 'small clove', item: 'Garlic', notes: 'Finely grated' },
        ],
      },
      {
        groupTitle: 'Wrap Fillings',
        items: [
          { amount: 2, unit: 'large', item: 'Sprouted whole-grain wraps', notes: 'Or spinach tortillas' },
          { amount: 1, unit: 'large', item: 'Ripe avocado', notes: 'Sliced' },
          { amount: 1, unit: 'cup', item: 'Baby spinach leaves', notes: 'Washed and dried' },
          { amount: 1, unit: 'cup', item: 'Persian cucumber ribbons', notes: 'Shaved with vegetable peeler' },
          { amount: 0.5, unit: 'cup', item: 'Alfalfa or broccoli sprouts' },
          { amount: 0.25, unit: 'cup', item: 'Shelled edamame', notes: 'Thawed and lightly salted' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Make the Herb Goddess Spread',
        text: 'In a small bowl, mix Greek yogurt, chopped herbs, lemon juice, olive oil, minced garlic, and a pinch of sea salt until vibrant and smooth.',
      },
      {
        step: 2,
        title: 'Warm the Tortillas',
        text: 'Warm the sprouted grain tortillas in a dry skillet over low heat for 15 seconds per side to make them pliable and prevent cracking when folded.',
      },
      {
        step: 3,
        title: 'Layer the Greens',
        text: 'Spread 2 tablespoons of green goddess yogurt across the center of each wrap. Layer with baby spinach, cucumber ribbons, avocado slices, shelled edamame, and a generous fistful of sprouts.',
      },
      {
        step: 4,
        title: 'Roll and Slice',
        text: 'Fold the sides inward, then roll firmly from bottom to top into a snug cylinder. Slice diagonally across the center with a sharp chef knife and serve immediately.',
      },
    ],
    chefTips: [
      'Use a vegetable peeler to shave thin ribbons of cucumber for a delicate crunch that folds effortlessly.',
      'Wrap tightly in parchment paper if taking to work or on a hike.',
    ],
    storageAdvice: 'Best eaten fresh within 4 hours. If meal prepping, store the spread in a small container and roll the wraps the morning of consumption.',
  },
  {
    id: 'rec-05',
    slug: 'berry-chia-overnight-oats',
    title: 'Blueberry & Blackberry Chia Overnight Oats',
    dek: 'Enjoy creamy, healthy chia overnight oats made with rolled oats, organic chia seeds, and unsweetened almond milk. Layered with blueberry compote, fresh blueberries, blackberries, and slivered almonds, this easy overnight oats recipe makes a delicious, nourishing breakfast with simple ingredients.',
    metaDescription: 'Make easy blueberry blackberry chia overnight oats for a high-fiber, meal-prep friendly healthy breakfast. Naturally sweetened with berries and honey.',
    image: chiaOatsImg,
    imageAlt: 'Clear glass jar filled with layered chia overnight oats, blueberry puree base, and topped with fresh plump blackberries, blueberries, and sliced almonds.',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Quick and Easy'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    totalTimeMinutes: 10,
    baseServings: 2,
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 184,
    isQuickAndEasy: true,
    publishedDate: '2026-03-10',
    author: {
      name: 'Elena Rostova',
      role: 'Culinary Nutritionist & Recipe Editor',
    },
    nutrition: {
      calories: 320,
      protein: 11,
      carbs: 48,
      fat: 10,
      fiber: 12,
      sodium: 120,
      sugar: 8,
    },
    aeoQuestions: [
      {
        question: 'How long do chia overnight oats need to soak in the fridge?',
        answer: 'Overnight oats need at least four hours for chia seeds and rolled oats to absorb the liquid and achieve a thick, spoonable pudding texture, though soaking overnight for 8 to 12 hours yields the smoothest result.',
      },
      {
        question: 'Are Chia Overnight Oats Good for Weight Loss?',
        answer: 'Chia overnight oats can be a helpful addition to a balanced weight-loss diet. Rolled oats and chia seeds provide dietary fiber, while almond milk offers a light, creamy base. Topped with fresh blueberries, blackberries, and slivered almonds, this healthy overnight oats recipe makes a satisfying breakfast. For a weight-loss-friendly option, pay attention to portion sizes and the amount of maple syrup or honey you add, as these ingredients contribute extra calories.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Oat & Chia Base',
        items: [
          { amount: 1, unit: 'cup', item: 'Certified gluten-free rolled oats' },
          { amount: 2, unit: 'tbsp', item: 'Organic black chia seeds' },
          { amount: 1.5, unit: 'cups', item: 'Unsweetened almond milk', notes: 'Or oat milk' },
          { amount: 1, unit: 'tbsp', item: 'Pure maple syrup or raw honey' },
          { amount: 0.5, unit: 'tsp', item: 'Pure vanilla extract' },
          { amount: 0.25, unit: 'tsp', item: 'Ground cinnamon' },
        ],
      },
      {
        groupTitle: 'Berry Toppings',
        items: [
          { amount: 0.5, unit: 'cup', item: 'Wild blueberries', notes: 'Fresh or thawed frozen' },
          { amount: 0.5, unit: 'cup', item: 'Fresh blackberries' },
          { amount: 2, unit: 'tbsp', item: 'Toasted slivered almonds' },
          { amount: 2, unit: 'sprigs', item: 'Fresh mint', notes: 'For garnish' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Combine Oats and Liquids',
        text: 'In a medium mixing bowl, stir together rolled oats, chia seeds, almond milk, maple syrup, vanilla extract, and ground cinnamon. Whisk well to ensure chia seeds do not clump at the bottom.',
      },
      {
        step: 2,
        title: 'Muddle the Base Berries',
        text: 'In the bottom of two 12-oz glass jars, lightly mash half of the wild blueberries with a fork to release natural berry juices and create a vibrant fruit base layer.',
      },
      {
        step: 3,
        title: 'Layer and Chill',
        text: 'Pour the oat and chia mixture evenly over the berry base in each jar. Seal tightly with lids and refrigerate for at least 4 hours, or ideally overnight.',
      },
      {
        step: 4,
        title: 'Garnish Before Serving',
        text: 'Before eating, top with fresh plump blackberries, remaining blueberries, toasted slivered almonds, and a sprig of fresh mint. Enjoy cold or let sit at room temp for 15 minutes.',
      },
    ],
    chefTips: [
      'Chia seeds hold up to 10 times their weight in liquid, creating a pudding-like texture naturally without dairy.',
      'Prep 4 jars on Sunday evening for seamless grab-and-go weekday breakfasts.',
    ],
    storageAdvice: 'Keep sealed in mason jars in the refrigerator for up to 5 days. Add crunchy nuts right before serving to keep them crisp.',
  },
  {
    id: 'rec-06',
    slug: 'lemon-herb-sheet-pan-chicken',
    title: 'Lemon Herb Sheet Pan Roast Chicken',
    dek: 'Golden roasted chicken breast sliced over caramelized rainbow carrots, tender broccoli florets, and sweet roasted garlic cloves.',
    metaDescription: 'Sheet pan lemon herb roasted chicken breast with rainbow carrots and broccoli. An effortless high-protein, low-mess healthy weeknight dinner.',
    image: sheetChickenImg,
    imageAlt: 'Sliced golden roasted herb chicken breast displayed on a parchment-lined sheet pan alongside roasted heirloom carrots, broccoli, and fresh herbs.',
    category: 'Dinner',
    dietaryTags: ['High Protein', 'Gluten-Free', 'Low-Carb', 'Dairy-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    baseServings: 1,
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 210,
    isQuickAndEasy: false,
    publishedDate: '2026-03-05',
    author: {
      name: 'Marcus Vance',
      role: 'Executive Wellness Chef',
    },
    nutrition: {
      calories: 250,
      protein: 26,
      carbs: 9,
      fat: 12,
      fiber: 4,
      sodium: 280,
      sugar: 3,
    },
    aeoQuestions: [
      {
        question: 'How do you keep chicken breast juicy when roasting on a sheet pan?',
        answer: 'Coat the chicken evenly in extra virgin olive oil and lemon juice, roast at a high temperature (400°F / 200°C) until the internal temperature reaches exactly 165°F (74°C), and let it rest for 5 minutes before slicing so juices redistribute.',
      },
      {
        question: 'What are the benefits of sheet pan dinners for healthy cooking?',
        answer: 'Sheet pan meals allow whole foods like lean proteins and seasonal vegetables to roast together with minimal oil, developing deep caramelized flavors through natural Maillard browning while requiring just one pan to clean.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Chicken & Marinade',
        items: [
          { amount: 100, unit: 'g', item: 'Boneless, skinless chicken breast' },
          { amount: 1, unit: 'tsp', item: 'Extra virgin olive oil' },
          { amount: 1, unit: 'tsp', item: 'Fresh lemon juice' },
          { amount: 0.25, unit: 'tsp', item: 'Lemon zest' },
          { amount: 0.5, unit: 'tsp', item: 'Fresh thyme or rosemary', notes: 'Chopped' },
          { amount: 0.25, unit: 'tsp', item: 'Garlic powder' },
          { amount: 0, unit: '', item: 'Salt', notes: 'To taste' },
          { amount: 0, unit: '', item: 'Black pepper', notes: 'To taste' },
        ],
      },
      {
        groupTitle: 'Roasted Vegetables',
        items: [
          { amount: 75, unit: 'g', item: 'Broccoli florets' },
          { amount: 50, unit: 'g', item: 'Carrot' },
          { amount: 0, unit: '', item: 'Garlic cloves', notes: '1–2 cloves, optional' },
          { amount: 0.5, unit: 'tsp', item: 'Olive oil for vegetables' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Preheat Oven and Prep Pan',
        text: 'Preheat oven to 400°F (200°C). Line an extra-large heavy rimmed baking sheet with unbleached parchment paper.',
      },
      {
        step: 2,
        title: 'Season the Vegetables and Chicken',
        text: 'Toss halved carrots, broccoli florets, and whole garlic cloves with 1 tablespoon of olive oil, salt, and pepper. Arrange around the edges of the pan. Place the chicken breasts in the center, rubbing thoroughly with olive oil, lemon zest, lemon juice, fresh thyme, and rosemary.',
      },
      {
        step: 3,
        title: 'Roast to Perfection',
        text: 'Roast in the upper middle rack for 22 to 25 minutes, until the chicken reaches 165°F internal temperature and the broccoli edges are lightly charred and caramelized.',
      },
      {
        step: 4,
        title: 'Rest, Slice, and Serve',
        text: 'Transfer chicken to a cutting board and rest for 5 minutes. Slice crosswise against the grain into thick medallions and return to the pan with the vegetables. Squeeze fresh lemon juice over everything and serve.',
      },
    ],
    chefTips: [
      'Pounding chicken breasts to an even 3/4-inch thickness prevents the thinner ends from drying out.',
      'Squeeze the soft roasted garlic cloves out of their skins and mash into the pan juices for an instant savory sauce.',
    ],
    storageAdvice: 'Pack chicken and roasted veggies into meal prep containers for up to 4 days. Reheat in a 350°F oven for 8 minutes or microwave covered with a damp towel.',
  },
  {
    id: 'rec-07',
    slug: 'matcha-green-smoothie-bowl',
    title: 'Matcha Supergreen Smoothie Bowl',
    dek: 'Thick creamy avocado, baby spinach, and ceremonial matcha smoothie topped with fresh sliced kiwi wheels, blueberries, hemp seeds, and toasted coconut.',
    metaDescription: 'Energizing matcha green smoothie bowl blended with spinach, avocado, and kiwi. A nutrient-dense, antioxidant-rich healthy breakfast bowl.',
    image: smoothieBowlImg,
    imageAlt: 'Vibrant emerald green smoothie bowl in an artisan ceramic dish decorated with arranged kiwi slices, plump blueberries, toasted coconut, and hemp seeds.',
    category: 'Breakfast',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Quick and Easy'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    totalTimeMinutes: 10,
    baseServings: 1,
    difficulty: 'Easy',
    rating: 4.8,
    reviewCount: 92,
    isQuickAndEasy: true,
    publishedDate: '2026-02-20',
    author: {
      name: 'Sofia Chen',
      role: 'Holistic Recipe Developer',
    },
    nutrition: {
      calories: 310,
      protein: 10,
      carbs: 39,
      fat: 14,
      fiber: 10,
      sodium: 95,
      sugar: 14,
    },
    aeoQuestions: [
      {
        question: 'How do you make a smoothie bowl thick enough to hold toppings without melting?',
        answer: 'Use frozen fruit (especially frozen banana or mango) instead of ice cubes, keep liquid to the absolute minimum (start with 1/3 cup), and add half an avocado to create a dense, velvety sorbet consistency.',
      },
      {
        question: 'What health benefits does ceremonial matcha provide in the morning?',
        answer: 'Ceremonial matcha contains the amino acid L-theanine alongside natural caffeine, promoting sustained mental clarity and calm focus without the jittery spike and crash associated with coffee.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Smoothie Base',
        items: [
          { amount: 1, unit: 'medium', item: 'Frozen ripe banana', notes: 'Sliced before freezing' },
          { amount: 0.5, unit: 'medium', item: 'Ripe avocado', notes: 'Adds velvet creaminess' },
          { amount: 1.5, unit: 'cups', item: 'Organic baby spinach', notes: 'Packed' },
          { amount: 1, unit: 'tsp', item: 'Ceremonial grade matcha powder' },
          { amount: 0.33, unit: 'cup', item: 'Unsweetened coconut milk or oat milk' },
        ],
      },
      {
        groupTitle: 'Nutrient-Dense Toppings',
        items: [
          { amount: 1, unit: 'small', item: 'Kiwi fruit', notes: 'Peeled and sliced into wheels' },
          { amount: 0.25, unit: 'cup', item: 'Fresh blueberries' },
          { amount: 1, unit: 'tbsp', item: 'Shelled hemp hearts' },
          { amount: 1, unit: 'tbsp', item: 'Unsweetened toasted coconut chips' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Blend the Greens and Liquids',
        text: 'Add coconut milk, baby spinach, and matcha powder to a high-speed blender first. Blend on medium for 30 seconds until completely liquified.',
      },
      {
        step: 2,
        title: 'Add Frozen Fruit for Thickness',
        text: 'Add the frozen banana slices and avocado. Blend on high, using the tamper to push ingredients into the blades, until a thick ice-cream-like consistency forms.',
      },
      {
        step: 3,
        title: 'Spoon into Bowl and Artfully Top',
        text: 'Spoon into a chilled ceramic bowl and smooth the surface with the back of a spoon. Arrange kiwi wheels, fresh blueberries, toasted coconut, and hemp hearts across the surface.',
      },
    ],
    chefTips: [
      'Chill your bowl in the freezer for 10 minutes prior to serving to prevent the smoothie from melting quickly.',
      'Sift matcha powder through a fine mesh tea strainer to avoid dry powder clumps.',
    ],
    storageAdvice: 'Smoothie bowls should be enjoyed immediately for best texture and vitamin preservation.',
  },
  {
    id: 'rec-08',
    slug: 'crispy-roasted-cauliflower-tacos',
    title: 'Spiced Roasted Cauliflower Street Tacos',
    dek: 'Golden cumin-chili spiced cauliflower florets nestled into charred corn tortillas with crunchy purple cabbage slaw, avocado crema, and lime.',
    metaDescription: 'Crispy roasted cauliflower tacos with tangy lime cabbage slaw and smooth avocado crema. A flavorful 30-minute plant-based vegetarian dinner.',
    image: cauliflowerTacosImg,
    imageAlt: 'Two street tacos filled with spiced roasted cauliflower, shredded purple cabbage slaw, creamy green avocado drizzle, and lime wedges.',
    category: 'Dinner',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    baseServings: 2,
    difficulty: 'Easy',
    rating: 4.8,
    reviewCount: 129,
    isQuickAndEasy: false,
    publishedDate: '2026-02-14',
    author: {
      name: 'Marcus Vance',
      role: 'Executive Wellness Chef',
    },
    nutrition: {
      calories: 360,
      protein: 11,
      carbs: 48,
      fat: 16,
      fiber: 12,
      sodium: 390,
      sugar: 5,
    },
    aeoQuestions: [
      {
        question: 'How do you get roasted cauliflower nicely charred and not soggy?',
        answer: 'Cut cauliflower into uniform small florets, ensure they are dry after washing, toss with adequate oil and spices, and roast at high heat (425°F / 220°C) with plenty of space on the pan so they roast rather than steam.',
      },
      {
        question: 'Can you use these taco fillings for a low-carb bowl?',
        answer: 'Yes! Simply omit the corn tortillas and spoon the roasted spiced cauliflower over a bed of shredded romaine lettuce and cabbage slaw, topping with the avocado crema for a delicious keto-friendly taco bowl.',
      },
    ],
    ingredientGroups: [
      {
        groupTitle: 'Spiced Cauliflower',
        items: [
          { amount: 1, unit: 'medium head', item: 'Cauliflower', notes: 'Cut into bite-sized florets' },
          { amount: 1.5, unit: 'tbsp', item: 'Avocado oil or olive oil' },
          { amount: 1, unit: 'tsp', item: 'Chili powder' },
          { amount: 1, unit: 'tsp', item: 'Ground cumin' },
          { amount: 0.5, unit: 'tsp', item: 'Smoked paprika and garlic powder' },
        ],
      },
      {
        groupTitle: 'Purple Cabbage Slaw',
        items: [
          { amount: 2, unit: 'cups', item: 'Shredded red cabbage' },
          { amount: 2, unit: 'tbsp', item: 'Fresh lime juice' },
          { amount: 1, unit: 'tbsp', item: 'Apple cider vinegar' },
          { amount: 0.25, unit: 'tsp', item: 'Sea salt' },
        ],
      },
      {
        groupTitle: 'Avocado Crema & Tortillas',
        items: [
          { amount: 1, unit: 'ripe', item: 'Avocado' },
          { amount: 0.25, unit: 'cup', item: 'Fresh cilantro leaves' },
          { amount: 2, unit: 'tbsp', item: 'Lime juice' },
          { amount: 4, unit: 'small (6-inch)', item: 'Stone-ground yellow corn tortillas' },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'Roast the Spiced Cauliflower',
        text: 'Preheat oven to 425°F (220°C). In a large bowl, toss cauliflower florets with oil, chili powder, cumin, smoked paprika, garlic powder, and salt. Spread across a large baking sheet and roast for 20 minutes until tender and deeply caramelized on edges.',
      },
      {
        step: 2,
        title: 'Toss the Crisp Slaw',
        text: 'In a bowl, toss shredded cabbage with lime juice, vinegar, and salt. Let rest for 10 minutes so the cabbage slightly softens while staying crisp.',
      },
      {
        step: 3,
        title: 'Blend the Avocado Crema',
        text: 'In a small food processor or blender, combine avocado, cilantro, lime juice, 2 tablespoons water, and a pinch of salt until creamy and smooth.',
      },
      {
        step: 4,
        title: 'Warm Tortillas and Assemble',
        text: 'Char corn tortillas directly over an open gas burner for 10 seconds or heat in a dry skillet. Fill with crunchy slaw, roasted cauliflower, generous spoonfuls of avocado crema, and lime wedges.',
      },
    ],
    chefTips: [
      'Charring tortillas gives them an authentic smoky street-taco aroma and makes them much less likely to tear.',
      'Add a pinch of cayenne pepper to the cauliflower rub if you enjoy spicy heat.',
    ],
    storageAdvice: 'Store roasted cauliflower and cabbage slaw in separate airtight containers in the fridge for up to 4 days. Assemble fresh just before eating.',
  },
];
