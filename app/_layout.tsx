import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import "../global.css";
import { SessionProvider } from "../features/auth/ctx";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Get Started",
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="(app)/basic-info"
            options={{
              title: "Get Started",
              headerShown: true,
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="(app)/goal-info"
            options={{
              title: "Get Started",
              headerShown: true,
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="(app)/food-preferences"
            options={{
              title: "Get Started",
              headerShown: true,
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="(app)/all-set"
            options={{
              title: "Get Started",
              headerShown: true,
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="(app)/(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="auth"
            options={{
              headerShown: false,
            }}
          />
              <Stack.Screen
        name="auth/signup"
        options={{
          title: "Sign Up",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen
        name="auth/login"
        options={{
          title: "Log In",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SessionProvider>
  );
}
