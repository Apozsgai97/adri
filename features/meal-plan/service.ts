type PersonalFormData = {
 firstName: string;
 lastName: string;
 weight: number;
 height: number;
 waist: number | null;
 goals: string[];
 dietRestrictions: string[];
 foodAllergies: string[];
 dislikedFoods: string[];
 favoriteFoods: string[];
};

let personalFormData: Partial<PersonalFormData> = {};

export function createMealPlanService() {
  return {
    setData: (newData: Partial<PersonalFormData>) => {
      personalFormData = { ...personalFormData, ...newData };
    },
  };
}