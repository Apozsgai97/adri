import { supabase } from "@/lib/supabase";
import { PersonalFormData } from "./type";

export function createMealPlanRepository() {
  return {
    async addPersonalInfo(personalInfo: Partial<PersonalFormData>) {
     const {error, data } = await supabase.from("personal_info").insert({
        first_name: personalInfo.firstName,
        last_name: personalInfo.lastName,
        weight: personalInfo.weight,
        height: personalInfo.height,
        waist_measurement: personalInfo.waist,
        goals: personalInfo.goals,
        diet_restrictions: personalInfo.dietRestrictions,
        food_allergies: personalInfo.foodAllergies,
        disliked_foods: personalInfo.dislikedFoods,
        favorite_foods: personalInfo.favoriteFoods,
      }).select("id").single();
      if (error) {
        console.error("Error adding personal info:", error);
        throw new Error("Failed to add personal info");
      }
      return data.id;
    },
   async getUserById(userId: string) {  
      const { data, error } = await supabase
        .from("personal_info")
        .select("*")
        .eq("id", userId)
        .single();
      if (error) {
        console.error("Error fetching personal info:", error);
        throw new Error("Failed to fetch personal info");
      }

      return data;
    }
  };
}


