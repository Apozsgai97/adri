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
          name="basic-info"
          options={{
            title: "Get Started",
            headerShown: true,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="goal-info"
          options={{
            title: "Get Started",
            headerShown: true,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="food-preferences"
          options={{
            title: "Get Started",
            headerShown: true,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="all-set"
          options={{
            title: "Get Started",
            headerShown: true,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
