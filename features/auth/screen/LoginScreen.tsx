import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { authService } from "../instance";
import { router } from "expo-router";
import { useSession } from "../ctx";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const {session} = useSession();
    useEffect(() => {
      console.log("Session:", session);
    }, [session]);

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
          onPress={async () => {
            try{

              await authService.signIn(email, password);
              router.push("/home");
            } catch (error) {
              console.error("Login failed:", error);
            }
          }}
        >
          <Text className="text-xl text-background">Continue</Text>
        </Button>
      </View>
    </View>
  );
}
