import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { FavoriteButton } from "@/components/ui/favoriteButton";
import { Image } from "expo-image";
import { Text } from "react-native";

export function MealCard() {
  return (
    <Card className="mb-4 gap-1 items-end pb-2 rounded-3xl border-0 shadow">
      <CardHeader className="items-center pb-0">
        <Image
          style={{ width: 130, height: 130 }}
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545",
          }}
        />
        <CardTitle className="">
          <Text className="text-lg font-bold">Meal Plan</Text>
        </CardTitle>
        <CardDescription className="">
          <Text className="text-lg font-bold">Breakfast</Text>
        </CardDescription>
      </CardHeader>
      <FavoriteButton />
    </Card>
  );
}
