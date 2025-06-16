import { Separator } from "@/components/Separator";
import { MealCard } from "@/features/meal-plan/components/MealCard";
import { NutritionCard } from "@/features/meal-plan/components/NutritionCard";
import { WelcomeCard } from "@/features/meal-plan/components/WelcomeCard";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      className="bg-slate-50"
      >
        <WelcomeCard />
        <Separator />
        <View className="m-6 gap-4">
          <Text className="text-xl font-bold">Your Meal Plan</Text>
          <NutritionCard />
          <Text className="text-xl font-bold">{"Today's Meals"}</Text>
          <View className="flex-row flex-wrap justify-between">
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
