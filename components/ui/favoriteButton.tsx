import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

// Import the utility function for merging Tailwind classes
import { cn } from "@/lib/utils";

type Props = {
  isFavorite: boolean;
  onClick: () => void;
  className?: string;
};

export function FavoriteButton({ isFavorite, onClick }: Props) {
  const primaryColor = "hsl(20, 100%, 56%)";

  return (
    <TouchableOpacity onPress={onClick} >
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        className="mr-2"
        size={24}
        color={isFavorite ? primaryColor : "gray"}
      />
    </TouchableOpacity>
  );
}
