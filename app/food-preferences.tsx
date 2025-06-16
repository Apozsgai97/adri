import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { mealPlanService } from "@/features/meal-plan/instance";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const preferenceFields: {
  key: string;
  label: string;
  placeholder: string;
}[] = [
  {
    key: "dietRestrictions",
    label: "Any diet restrictions?",
    placeholder: "vegetarian, vegan, gluten-free, etc.",
  },
  {
    key: "foodAllergies",
    label: "Any food allergies?",
    placeholder: "peanuts, dairy, etc.",
  },
  {
    key: "dislikedFoods",
    label: "Foods you dislike?",
    placeholder: "broccoli, mushrooms, etc.",
  },
  {
    key: "favoriteFoods",
    label: "Favorite foods?",
    placeholder: "bananas, pizza, etc.",
  },
];

export default function FoodPreferencesScreen() {
  const router = useRouter();

  const [inputs, setInputs] = useState<Record<string, string>>({
    dietRestrictions: "",
    foodAllergies: "",
    dislikedFoods: "",
    favoriteFoods: "",
  });

  const [values, setValues] = useState<Record<string, string[]>>({
    dietRestrictions: [],
    foodAllergies: [],
    dislikedFoods: [],
    favoriteFoods: [],
  });

  const handleAdd = (key: string) => {
    const newValue = inputs[key].trim();
    if (!newValue || values[key].includes(newValue)) return;

    setValues((prev) => ({
      ...prev,
      [key]: [...prev[key], newValue],
    }));

    setInputs((prev) => ({ ...prev, [key]: "" }));
  };

  const handleRemove = (key: string, item: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: prev[key].filter((i) => i !== item),
    }));
  };

  return (
    <View className="flex-1 bg-background px-4 py-10 justify-between">
      <View>
        <View className="gap-2 pb-4">
          <Text className="text-3xl font-bold">Food Preferences</Text>
          <Text className="text-lg text-muted-foreground">
            This helps us create a personalized meal plan just for you
          </Text>
        </View>

        <View className="py-4 gap-6">
          {preferenceFields.map(({ key, label, placeholder }) => (
            <View key={key} className="gap-2">
              <Label className="text-lg" nativeID={key}>
                {label}
              </Label>
              <View className="flex-row items-center gap-2">
                <Input
                  aria-labelledby={key}
                  placeholder={placeholder}
                  value={inputs[key]}
                  onChangeText={(text) =>
                    setInputs((prev) => ({ ...prev, [key]: text }))
                  }
                  className="flex-1"
                />
                <Button
                  onPress={() => handleAdd(key)}
                  className="rounded-md px-4 border-primary"
                  variant={"outline"}
                >
                  <Text className="text-primary">Add</Text>
                </Button>
              </View>

              {values[key].length > 0 && (
                <View className="flex-row flex-wrap gap-2 pt-2">
                  {values[key].map((item) => (
                    <View
                      key={item}
                      className="flex-row items-center bg-orange-50 px-3 py-1 rounded-full"
                    >
                      <Text className="text-primary mr-2 text-lg">{item}</Text>
                      <TouchableOpacity onPress={() => handleRemove(key, item)}>
                        <Text className="text-primary font-bold text-lg ">
                          ×
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      <View>
        <Button
          size="lg"
          className="rounded-full"
          onPress={() => {
            // Handle form submission here
            console.log("Submitted preferences:", values);
            mealPlanService.setData({dietRestrictions: values.dietRestrictions, foodAllergies: values.foodAllergies, dislikedFoods: values.dislikedFoods, favoriteFoods: values.favoriteFoods});
            router.push("/all-set");
          }}
        >
          <Text className="text-xl text-background">Continue</Text>
        </Button>
      </View>
    </View>
  );
}
