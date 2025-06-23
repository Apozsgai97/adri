import { AuthRepository } from "./repository";

export function createAuthService(repository: AuthRepository) {
  return {
    async signUp(email: string, password: string) {
      await repository.signUp(email, password);
    },
    async signIn(email: string, password: string) {
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const { user } = await repository.signIn(email, password);
      if (user) {
        console.log("User signed in:", user);
      }
    },
    async getSession() {
      return await repository.getSession();
    },
    async signOut() {
      await repository.signOut();
    },
  };
}


