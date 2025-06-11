import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function FoodPreferencesScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background px-4 py-10 justify-between">
      <View>
        <View className="gap-2 pb-4">
          <Text className="text-3xl font-bold">Food Preferences</Text>
          <Text className="text-lg text-muted-foreground">
            This helps us create a personalized meal plan just for you
          </Text>
        </View>

        <View className="py-4 gap-4">
          <View className="gap-2">
            <Label nativeID="dietRestriction">Any diet restrictions?</Label>
            <Input
              placeholder="vegetarian, vegan, gluten-free, etc."
              aria-labelledby="dietRestriction"
            />
          </View>
          <View className="gap-2">
            <Label nativeID="foodAllergies">Any food allergies?</Label>
            <Input
              placeholder="peanuts, dairy, etc."
              aria-labelledby="foodAllergies"
            />
          </View>
          <View className="gap-2">
            <Label nativeID="dislikedFood">Foods you dislike?</Label>
            <Input
              placeholder="broccoli, mushrooms, etc."
              aria-labelledby="dislikedFood"
            />
          </View>
          <View className="gap-2">
            <Label nativeID="favoriteFoods">Favorite foods?</Label>
            <Input placeholder="bananas, pizza, etc."
             aria-labelledby="favoriteFoods" />
          </View>
        </View>
      </View>

      <View>
        <Button
          size={"lg"}
          className="rounded-full"
          onPress={() => {
            // Handle form submission
            // For now, just return to home
            router.back();
          }}
        >
          <Text className="text-xl text-background">Continue</Text>
        </Button>
      </View>
    </View>
  );
}
