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

    async signIn(email: string, password: string) {
      const { data, error} = await Db.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error signing in:", error);
        throw new Error("Failed to sign in");
      }
      console.log("Sign in successful:", data);
      return data;
    },

    async getSession() {
      const {data, error } = await Db.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
        throw new Error("Failed to get session");
      }
      return data.session;
    },

    async signOut() {
      const { error } = await Db.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
        throw new Error("Failed to sign out");
      }
      console.log("Sign out successful");
    },
  };
}

export type AuthRepository = ReturnType<typeof createAuthRepository>;