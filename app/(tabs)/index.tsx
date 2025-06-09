import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import {
  Card,
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
        <View className="m-6">
          <Text className="text-lg font-bold">Your Meal Plan</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
