import { Button } from "@/components/Button";
import { mealPlanService } from "@/features/meal-plan/instance";
import { useRouter } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("@/assets/images/all-set.png")}
      className="flex-1"
      imageStyle={{ bottom: 100 }}
    >
      <SafeAreaView className="flex-1 justify-end">
        <View className="bg-background pt-20 px-4 rounded-t-3xl ">
          <Text className="text-4xl text-center font-semibold pb-4">
            All set!
          </Text>
          <Text className="text-lg text-center my-4 pb-10">
            We&#39;re ready to create your personalized profile. Our AI will
            analyze your data and generate a plan tailored just for you.
          </Text>
          <Button
            size={"lg"}
            className="rounded-full mt-4"
            onPress={() => {
            mealPlanService.addPersonalInfo();
            router.replace("/home")}}
              
          >
            <Text className="text-xl text-background">Continue</Text>
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
