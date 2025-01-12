import { View, Text, TouchableOpacity, Image } from "react-native";

type CategoryCardProps = {
  imgUrl: string;
  title: string;
};

const CategoryCard = ({ imgUrl, title }: CategoryCardProps) => {
  return (
    <TouchableOpacity className="flex-col gap-3 relative">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold text-sm">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CategoryCard;
