import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { FavoriteButton } from "@/components/ui/favoriteButton";
import { Image } from "expo-image";
import { useState } from "react";
import { Text } from "react-native";

export function MealCard() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="mb-4 rounded-3xl border shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-48">
      <Image
        style={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
        source={{
          uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545",
        }}
        contentFit="cover"
      />
      <CardHeader className="items-center gap-1 pt-2 pb-0">
        <CardTitle>
          <Text className="text-lg">Meal Plan</Text>
        </CardTitle>
        <CardDescription>
          <Text className="text-lg">Breakfast</Text>
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-end p-2">
      <FavoriteButton
        isFavorite={isFavorite}
        onClick={() => setIsFavorite((prev) => !prev)}
      />
      </CardFooter>
    </Card>
  );
}
