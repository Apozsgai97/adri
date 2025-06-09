import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Separator } from "@/components/Separator";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="p-4 flex-1">
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
              Here is your personalized mealplan.
            </CardDescription>
          </CardHeader>
        </Card>
        <Separator />
        <Text>Your Meal Plan</Text>

        <View className="flex-row flex-wrap justify-between">
          <View className="w-[48%] h-40 bg-secondary/10 rounded-lg p-4 mb-4">
            <Text className="text-lg font-medium text-secondary">
              Quick Action 1
            </Text>
          </View>
          <View className="w-[48%] h-40 bg-accent/10 rounded-lg p-4 mb-4">
            <Text className="text-lg font-medium text-accent">
              Quick Action 2
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
