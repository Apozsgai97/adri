import { AuthRepository } from "./repository";

export function createAuthService(repository: AuthRepository) {
  return {
    async signUp(email: string, password: string) {
      await repository.signUp(email, password);
    },
    async signIn(email: string, password: string) {
      await repository.signIn(email, password);
    },
  };
}
