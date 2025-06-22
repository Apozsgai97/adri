import { authService } from "@/features/auth/instance";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const SessionContext = createContext({
  session: null,
  isLoading: true,
  signIn: async (email: string, password: string) => {},
  signOut: async () => {},
});

export function useSessionState() {
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadSession() {
      const session = await authService.getSession();
      if (session) {
        setSession(session);
      }
      setIsLoading(false);
    }
    loadSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await authService.signIn(email, password);
      const session = await authService.getSession();
      setSession(session);
    } catch (error) {
      console.error("Error signing in:", error);
      throw new Error("Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    await authService.signOut();
    setSession(null);
    setIsLoading(false);
  };

  return { session, isLoading, signIn, signOut };
}

type Props = {
  children: ReactNode;
};

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}

export function SessionProvider({ children }: Props) {
  const value = useSessionState();
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
