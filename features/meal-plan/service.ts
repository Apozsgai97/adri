import { createMealPlanRepository } from "./repository";
import { PersonalFormData } from "./type";


let personalFormData: Partial<PersonalFormData> = {};

export function createMealPlanService() {
 const repository = createMealPlanRepository();
  return {
    setData: (newData: Partial<PersonalFormData>) => {
      personalFormData = { ...personalFormData, ...newData };
    },
  };
}