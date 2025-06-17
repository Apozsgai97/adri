export function createAuthService(repository: any) {
  return {
    async signUp(email: string, password: string) {
      await repository.signUp(email, password);
    },
  };
}
