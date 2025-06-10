import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

type Props = {
  isFavorite: boolean;
  onClick: () => void;
}

export function FavoriteButton({isFavorite, onClick}: Props) {
  return (
    <TouchableOpacity onPress={onClick}>
      <Ionicons name={isFavorite ? "heart": "heart-outline"} className="mr-2" size={24} color={isFavorite ? "orange": "gray"}/>
    </TouchableOpacity>
  );
}