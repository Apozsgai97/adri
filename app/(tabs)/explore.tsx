import { Button } from "@/components/Button";
import {  View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary justify-end">
      <View className="bg-background py-16 px-4">
        <Text className="text-4xl text-center">
          Making Meal Planning Effortless and Enjoyable
        </Text>
        <Text className="text-lg text-center my-4">
          Discover a world of delicious recipes, personalized meal plans, and
          nutritional insights. Join us in transforming your cooking experience!
        </Text>
        <Button className="rounded-full mt-4 border-primary" size={"lg"} variant={"outline"}>
          <Text className="text-xl text-primary">Log in</Text>
        </Button>
        <Button size={"lg"} className="rounded-full mt-4">
          <Text className="text-xl text-background">Get started</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
