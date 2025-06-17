import { createAuthRepository } from "./repository";
import { createAuthService } from "./service";
import { supabase } from "@/lib/supabase";

export const authService = createAuthService(createAuthRepository(supabase));