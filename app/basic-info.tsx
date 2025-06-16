import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function BasicInfoScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const router = useRouter();

  return (
    <View className="flex-1 bg-background px-4 py-10 justify-between">
      <View>
        <View className="gap-2 pb-4">
          <Text className="text-3xl font-bold">Basic Information</Text>
          <Text className="text-lg text-muted-foreground">
            This helps us create a personalized plan just for you
          </Text>
        </View>

        <View className="py-4 gap-4">
          <View className="gap-2">
            <Label nativeID="firstName">First name</Label>
            <Input
              placeholder="Enter your first name"
              aria-labelledby="firstName"
              value={firstName}
              onChangeText={setFirstName}
              autoFocus
            />
          </View>
          <View className="gap-2">
            <Label nativeID="lastName">Last name</Label>
            <Input
              placeholder="Enter your last name"
              aria-labelledby="lastName"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View className="gap-2">
            <Label nativeID="weight">Weight (kg)</Label>
            <Input
              placeholder="80"
              aria-labelledby="weight"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
          </View>
          <View className="gap-2">
            <Label nativeID="height">Height (cm)</Label>
            <Input
              placeholder="168"
              aria-labelledby="height"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />
          </View>
          <View className="gap-2">
            <Label nativeID="waist">Waist measurement (cm) optional</Label>
            <Input
              placeholder="168"
              aria-labelledby="waist"
              keyboardType="numeric"
              value={waist}
              onChangeText={setWaist}
            />
          </View>
        </View>
      </View>

      <View>
        <Button
          size={"lg"}
          className="rounded-full"
          onPress={() => {
            const basicInfo = {
              firstName: firstName.trim(),
              lastName: lastName.trim(),
              weight: weight.trim() ? parseFloat(weight) : null,
              height: height.trim() ? parseFloat(height) : null,
              waist: waist.trim() ? parseFloat(waist) : null,
            };
            console.log(basicInfo);
            router.push("/goal-info");
          }}
        >
          <Text className="text-xl text-background">Continue</Text>
        </Button>
      </View>
    </View>
  );
}
