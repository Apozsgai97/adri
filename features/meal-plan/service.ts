import { createMealPlanRepository } from "./repository";
import { PersonalFormData } from "./type";


let personalFormData: Partial<PersonalFormData> = {};

export function createMealPlanService() {
 const repository = createMealPlanRepository();
  return {
   async setPersonalFormData(data: Partial<PersonalFormData>) {
      personalFormData = { ...personalFormData, ...data };
      return personalFormData;
    },
    async addPersonalInfo() {
return await repository.addPersonalInfo(personalFormData);
    },
    async getUserById(userId: string) {
      return await repository.getUserById(userId);

    },
  };
}