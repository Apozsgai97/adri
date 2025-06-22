import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";
import { mealPlanService } from "@/features/meal-plan/instance";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const goalsList = [
  { key: "loseWeight", label: "Lose weight" },
  { key: "gainWeight", label: "Gain weight" },
  { key: "eatHealthy", label: "Eat healthier" },
  { key: "reduceSugar", label: "Reduce sugar intake" },
  { key: "saveTime", label: "Save time on cooking" },
  { key: "familyMeals", label: "Plan meals for the whole family" },
  { key: "budgetMeals", label: "Eat well on a budget" },
  { key: "eatingRoutine", label: "Establish a consistent eating routine" },
];

export default function GoalInfoScreen() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [otherGoal, setOtherGoal] = useState("");

  const toggleGoal = ( label: string) => {
    setSelectedGoals((prev) =>
      prev.includes(label)
        ? prev.filter((goal) => goal !== label)
        : [...prev, label]
    );
  };

  return (
    <View className="flex-1 bg-background px-4 py-10 justify-between">
      <View>
        <View className="gap-2 pb-2">
          <Text className="text-3xl font-bold">Your goals</Text>
          <Text className="text-lg text-muted-foreground">
            Tell us what you want to achieve with the help of this application.
          </Text>
        </View>

        <View className="py-4 gap-4">
          {goalsList.map(({ key, label }) => {
            const isChecked = selectedGoals.includes(label);
            return (
              <View
                key={key}
                className={`flex-row items-center px-4 py-2 rounded-lg border ${
                  isChecked ? "border-primary bg-orange-50" : "border-gray-200"
                }`}
              >
                <Checkbox
                  aria-labelledby={key}
                  checked={isChecked}
                  onCheckedChange={() => toggleGoal(label)}
                />
                <Label
                  nativeID={key}
                  onPress={() => toggleGoal(label)}
                  className="ml-3"
                >
                  {label}
                </Label>
              </View>
            );
          })}

          <View className="gap-2">
            <Label nativeID="otherGoal">Other</Label>
            <Textarea
              aria-labelledby="otherGoal"
              value={otherGoal}
              onChangeText={setOtherGoal}
            />
          </View>
        </View>
      </View>

      <View>
        <Button
          size={"lg"}
          className="rounded-full"
          onPress={() => {
            const allSelectedGoals = [...selectedGoals];
            if (otherGoal.trim()) {
              allSelectedGoals.push(otherGoal.trim());
            }
            mealPlanService.setPersonalFormData({goals: allSelectedGoals});
            router.push("/food-preferences");
          }}
        >
          <Text className="text-xl text-background">Continue</Text>
        </Button>
      </View>
    </View>
  );
}
