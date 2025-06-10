import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Text, View } from "react-native";

export function NutritionCard() {
  return (
    <Card className="border-1 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="text-md">Daily Nutrition</CardTitle>
        <CardDescription>Last updated: 2023-10-01</CardDescription>
      </CardHeader>
      <CardContent className="gap-4">
        <View className="flex-row gap-4 justify-between">
          <Card className="flex-grow items-center border-0 shadow-none bg-blue-100 ">
            <CardHeader className="p-2">
              <CardTitle className="text-sm font-normal text-blue-700">
                Protein
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <Text className="text-lg font-bold text-blue-700">120g</Text>
            </CardContent>
          </Card>
          <Card className="flex-grow items-center border-0 shadow-none bg-yellow-100">
            <CardHeader className="p-2">
              <CardTitle className="text-sm font-normal  text-amber-800">
                Carbs
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <Text className="text-lg font-bold text-amber-800">180g</Text>
            </CardContent>
          </Card>
          <Card className="flex-grow items-center border-0 shadow-none bg-green-100">
            <CardHeader className="p-2">
              <CardTitle className="text-sm font-normal text-green-700">
                Fat
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <Text className="text-lg font-bold text-green-700">60g</Text>
            </CardContent>
          </Card>
        </View>
        <Card className="flex-grow items-center border-0 shadow-none bg-primary">
          <CardHeader className="p-2">
            <CardTitle className="text-md font-normal  text-background">
              Total Calories
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <Text className="text-2xl font-bold text-background">1800</Text>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
