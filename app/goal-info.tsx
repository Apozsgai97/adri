import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function GoalInfoScreen() {
  const router = useRouter();
  const [loseWeight, setLoseWeight] = useState(false);
  const [gainWeight, setGainWeight] = useState(false);
  const [eatHealthy, setEatHealthy] = useState(false);
  const [reduceSugar, setReduceSugar] = useState(false);
  const [plantBasedMeals, setPlantBasedMeals] = useState(false);
  const [saveTime, setSaveTime] = useState(false);
  const [familyMeals, setFamilyMeals] = useState(false);
  const [budgetMeals, setBudgetMeals] = useState(false);
  const [eatingRoutine, setEatingRoutine] = useState(false);

  return (
    <View className="flex-1 bg-background px-4 py-10 justify-between">
      <View>
        <View className="gap-2 pb-4">
          <Text className="text-3xl font-bold">Your goals</Text>
          <Text className="text-lg text-muted-foreground">
            Tell us what you want to achieve with the help of this application.
          </Text>
        </View>

        <View className="py-4 gap-6">
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="loseWeight"
              checked={loseWeight}
              onCheckedChange={setLoseWeight}
            />
            <Label
              nativeID="loseWeight"
              onPress={() => setLoseWeight((prev) => !prev)}
            >
              Lose weight
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="gainWeight"
              checked={gainWeight}
              onCheckedChange={setGainWeight}
            />
            <Label
              nativeID="gainWeight"
              onPress={() => setGainWeight((prev) => !prev)}
            >
              Gain weight
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="reduceSugar"
              checked={reduceSugar}
              onCheckedChange={setReduceSugar}
            />
            <Label
              nativeID="reduceSugar"
              onPress={() => setReduceSugar((prev) => !prev)}
            >
              Reduce sugar intake
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="eatHealthy"
              checked={eatHealthy}
              onCheckedChange={setEatHealthy}
            />
            <Label
              nativeID="eatHealthy"
              onPress={() => setEatHealthy((prev) => !prev)}
            >
              Eat healthier
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="eatHealthy"
              checked={plantBasedMeals}
              onCheckedChange={setPlantBasedMeals}
            />
            <Label
              nativeID="eatHealthy"
              onPress={() => setPlantBasedMeals((prev) => !prev)}
            >
              Increase plant-based meals
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="eatHealthy"
              checked={saveTime}
              onCheckedChange={setSaveTime}
            />
            <Label
              nativeID="eatHealthy"
              onPress={() => setSaveTime((prev) => !prev)}
            >
              Save time on cooking
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="eatHealthy"
              checked={familyMeals}
              onCheckedChange={setFamilyMeals}
            />
            <Label
              nativeID="eatHealthy"
              onPress={() => setFamilyMeals((prev) => !prev)}
            >
              Plan meals for the whole family
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="eatHealthy"
              checked={budgetMeals}
              onCheckedChange={setBudgetMeals}
            />
            <Label
              nativeID="eatHealthy"
              onPress={() => setBudgetMeals((prev) => !prev)}
            >
              Eat well on a budget
            </Label>
          </View>
          <View className="flex-row gap-3 items-center">
            <Checkbox
              aria-labelledby="eatHealthy"
              checked={eatingRoutine}
              onCheckedChange={setEatingRoutine}
            />
            <Label
              nativeID="eatHealthy"
              onPress={() => setEatingRoutine((prev) => !prev)}
            >
              Establish a consistent eating routine
            </Label>
          </View>

          <View className="gap-2">
            <Label nativeID="otherGoal">Other</Label>
            <Textarea aria-labelledby="otherGoal" />
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
