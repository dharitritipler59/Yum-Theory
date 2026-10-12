export type MealCategory =
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Salads'
  | 'Healthy Snacks'
  | 'Soups';

export type DietaryTag =
  | 'Vegetarian'
  | 'Vegan'
  | 'Gluten-Free'
  | 'Dairy-Free'
  | 'High Protein'
  | 'Low-Carb'
  | 'Quick and Easy';

export interface IngredientItem {
  amount: number; // numeric base amount for 1 or base servings
  unit: string;
  item: string;
  notes?: string;
}

export interface IngredientGroup {
  groupTitle?: string;
  items: IngredientItem[];
}

export interface InstructionStep {
  step: number;
  title: string;
  text: string;
  tip?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number; // grams
  carbs: number;   // grams
  fat: number;     // grams
  fiber: number;   // grams
  sugar?: number;  // grams
  sodium?: number; // mg
}

export interface AeoQuestion {
  question: string;
  answer: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  dek: string; // short editorial teaser / summary
  metaDescription: string;
  image: string;
  imageAlt: string;
  category: MealCategory;
  dietaryTags: DietaryTag[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  baseServings: number;
  difficulty: 'Easy' | 'Medium';
  rating: number;
  reviewCount: number;
  isQuickAndEasy: boolean;
  isFeatured?: boolean;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  nutrition: NutritionInfo;
  aeoQuestions: AeoQuestion[];
  ingredientGroups: IngredientGroup[];
  instructions: InstructionStep[];
  chefTips: string[];
  storageAdvice: string;
}

export type SortOption =
  | 'popular'
  | 'quickest'
  | 'alphabetical'
  | 'newest';
