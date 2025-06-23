import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Loading } from "@/components/ui/Loading";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { useSession } from "../ctx";
import { authService } from "../instance";

export function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-background px-4 py-10 justify-between">
      <View className="gap-4">
        <View className="gap-2">
          <Label nativeID="email">Email</Label>
          <Input
            placeholder="exemple@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            aria-labelledby="email"
            autoFocus
          />
        </View>
        <View className="gap-2">
          <Label nativeID="password">Password</Label>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            keyboardType="email-address"
            secureTextEntry
            aria-labelledby="email"
            autoFocus
          />
        </View>
      </View>
      <View>
        <Button
          size={"lg"}
          className="rounded-full"
          onPress={() => {
            authService.signUp(email, password);
            router.push("/basic-info");
          }}
        >
          <Text className="text-xl text-background">Continue</Text>
        </Button>
      </View>
    </View>
  );
}
