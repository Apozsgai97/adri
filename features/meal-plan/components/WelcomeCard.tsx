import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Text, View } from "react-native";

export function WelcomeCard() {
  return (
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
        <CardDescription>Here is your personalized meal plan.</CardDescription>
      </CardHeader>
    </Card>
  );
}
