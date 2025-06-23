import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { useSession } from "../ctx";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { signIn } = useSession();
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
          disabled={isLoggingIn || !email || !password}
          size={"lg"}
          className="rounded-full"
          onPress={async () => {
            setIsLoggingIn(true);
            try {
              await signIn(email, password);
              router.push("/home");
            } catch (error) {
              console.error("Login failed:", error);
              setIsLoggingIn(false);
            }
          }}
        >
          {isLoggingIn ? (
            <Text className="text-xl text-background">Logging in...</Text>
          ) : (
            <Text className="text-xl text-background">Login</Text>
          )}
        </Button>
      </View>
    </View>
  );
}
