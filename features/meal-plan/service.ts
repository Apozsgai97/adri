import { createMealPlanRepository } from "./repository";
import { PersonalFormData } from "./type";


let personalFormData: Partial<PersonalFormData> = {};

export function createMealPlanService() {
 const repository = createMealPlanRepository();
  return {
   async setPersonalFormData(data: Partial<PersonalFormData>) {
      personalFormData = { ...personalFormData, ...data };
      console.log("Setting personalFormData:", personalFormData);
      return personalFormData;
    },
    async addPersonalInfo() {
      await repository.addPersonalInfo(personalFormData);
    },
  };
}