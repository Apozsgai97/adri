import { PersonalFormData } from "./type";


let personalFormData: Partial<PersonalFormData> = {};

export function createMealPlanService() {
  return {
    setData: (newData: Partial<PersonalFormData>) => {
      personalFormData = { ...personalFormData, ...newData };
    },
  };
}