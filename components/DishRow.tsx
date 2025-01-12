import { View, Text } from "react-native";

type DishRowProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

const DishRow = ({ id, name, description, price, image }: DishRowProps) => {
  return (
    <View>
      <Text>DishRow</Text>
    </View>
  );
};
export default DishRow;
