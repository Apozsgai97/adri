import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Separator } from "@/components/Separator";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 bg-orange-100">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <View className="flex-row justify-between items-center">
              <CardTitle accessibilityRole="header">Hi, Carol!</CardTitle>
              <Avatar alt="Carol's Avatar">
                <AvatarImage
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/145907820?v=4",
                  }}
                />
                <AvatarFallback>
                  <Text>CM</Text>
                </AvatarFallback>
              </Avatar>
            </View>
            <CardDescription>
              Here is your personalized meal plan.
            </CardDescription>
          </CardHeader>
        </Card>
        <Separator />
        <View className="m-6 gap-4">
          <Text className="text-lg font-bold">Your Meal Plan</Text>
          <Card className="border-1">
            <CardHeader className="flex-row justify-between items-center">
              <CardTitle className="text-md">Daily Nutrition</CardTitle>
              <CardDescription>Last updated: 2023-10-01</CardDescription>
            </CardHeader>
            <CardContent className="gap-4">
              <View className="flex-row gap-4 justify-between">
                <Card className="flex-grow items-center border-0 shadow-none bg-blue-100 ">
                  <CardHeader className="p-2">
                    <CardTitle className="text-sm font-normal text-blue-700">Protein</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Text className="text-lg font-bold text-blue-700">120g</Text>
                  </CardContent>
                </Card>
                <Card className="flex-grow items-center border-0 shadow-none bg-yellow-100">
                  <CardHeader className="p-2">
                    <CardTitle className="text-sm font-normal  text-amber-800">Carbs</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Text className="text-lg font-bold text-amber-800">180g</Text>
                  </CardContent>
                </Card>
                <Card className="flex-grow items-center border-0 shadow-none bg-green-100">
                  <CardHeader className="p-2">
                    <CardTitle className="text-sm font-normal text-green-700">Fat</CardTitle>
                  </CardHeader>
                  <CardContent  className="pb-2">
                    <Text className="text-lg font-bold text-green-700">60g</Text>
                  </CardContent>
                </Card>
              </View>
                <Card className="flex-grow items-center border-0 shadow-none bg-orange-600">
                  <CardHeader className="p-2">
                    <CardTitle className="text-md font-normal  text-background">Total Calories</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Text className="text-2xl font-bold text-background">1800</Text>
                  </CardContent>
                </Card>
            </CardContent>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
}
