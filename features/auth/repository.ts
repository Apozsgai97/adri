import { SupabaseClient } from "@supabase/supabase-js";

export function createAuthRepository(Db: SupabaseClient) {
  return {
    async signUp(email: string, password: string) {
      const { data, error } = await Db.auth.signUp({
        email,
        password,
      });
      if (error) {
        console.error("Error signing up:", error);
        throw new Error("Failed to sign up");
      }
      console.log("Sign up successful:", data);
      return data;
    },

    async signIn(email: string, password: string) {},
  };
}

export type AuthRepository = ReturnType<typeof createAuthRepository>;