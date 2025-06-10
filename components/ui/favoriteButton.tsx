import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export function FavoriteButton() {
  return (
    <TouchableOpacity>
      <Ionicons name="heart-outline" className="mr-2" size={24} />
    </TouchableOpacity>
  );
}