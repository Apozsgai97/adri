import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("@/assets/images/login-img.png")}
      className="flex-1"
      imageStyle={{ bottom: 370 }}
    >
      <SafeAreaView className="flex-1 justify-end">
        <View className="bg-background pt-14 px-4 rounded-t-3xl">
          <Text className="text-4xl text-center font-semibold">
            Making Meal Planning Effortless and Enjoyable
          </Text>
          <Text className="text-lg text-center my-4 mb-10">
            Discover a world of delicious recipes, personalized meal plans, and
            nutritional insights. Join us in transforming your cooking
            experience!
          </Text>
          <Button
            className="rounded-full mt-4 border-primary"
            size={"lg"}
            variant={"outline"}
          >
            <Text className="text-xl text-primary">Log in</Text>
          </Button>
          <Button
            size={"lg"}
            className="rounded-full mt-4"
            onPress={() => router.push("./auth/signup")}
          >
            <Text className="text-xl text-background">Get started</Text>
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
