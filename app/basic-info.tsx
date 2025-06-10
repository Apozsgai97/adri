import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function BasicInfoScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background px-4 py-10 justify-between">
      <View >
      <View className="gap-2 pb-4">
        <Text className="text-3xl font-bold">Basic Information</Text>
        <Text className="text-lg text-muted-foreground">This helps us create a personalized plan just for you</Text>
      </View>

      <View className="py-4 gap-4">
        <View className="gap-2">
          <Label nativeID="firstName">First name</Label>
          <Input
            placeholder="Enter your first name"
            aria-labelledby="firstName"
          />
        </View>
        <View className="gap-2">
          <Label nativeID="lastName">Last name</Label>
          <Input
            placeholder="Enter your last name"
            aria-labelledby="lastName"
          />
        </View>
        <View className="gap-2">
          <Label nativeID="weight">Weight (kg)</Label>
          <Input
            placeholder="80"
            aria-labelledby="weight"
            keyboardType="numeric"
          />
        </View>
        <View className="gap-2">
          <Label nativeID="height">Height (cm)</Label>
          <Input placeholder="168" aria-labelledby="height" />
        </View>
        <View className="gap-2">
          <Label nativeID="waist">Waist measurement (cm) optional</Label>
          <Input placeholder="168" aria-labelledby="waist" />
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
