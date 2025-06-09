import { Separator } from "@/components/Separator";
import { NutritionCard } from "@/features/meal-plan/components/NutritionCard";
import { WelcomeCard } from "@/features/meal-plan/components/WelcomeCard";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 bg-orange-100">
        <WelcomeCard />
        <Separator />
        <View className="m-6 gap-4">
          <Text className="text-lg font-bold">Your Meal Plan</Text>
          <NutritionCard />
        </View>
      </View>
    </SafeAreaView>
  );
}
