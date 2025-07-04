import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { mealPlanService } from "../instance";

export function WelcomeCard() {
  const [userName, setUserName] = useState("User");
  const { userId } = useLocalSearchParams();

  useEffect(() => {
    const fetchUserName = async () => {
      if (!userId) return;
      const user = await mealPlanService.getUserById(userId as string);
      console.log("Fetched user:", user);
      setUserName(user?.first_name || "User");
    };
    fetchUserName();
  }, [userId]);

  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <View className="flex-row justify-between items-center">
          <CardTitle accessibilityRole="header">{userName}</CardTitle>
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
