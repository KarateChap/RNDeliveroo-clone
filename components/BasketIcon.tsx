import { selectBasketItems, selectBasketTotal } from "@/features/basketSlice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import CurrencyInput from "react-native-currency-input";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import { RootStackParamList } from "@/navigation/types";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#F5585C] mx-5 p-4 rounded-lg flex-row items-center gap-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#c93c40] py-1 px-3 rounded-md">
          {items.length}
        </Text>
        <View className="flex-row items-center justify-center flex-1 gap-3">
          <Text className=" text-white font-extrabold text-lg text-center">
            View Basket
          </Text>
          <ShoppingCartIcon size={25} color="white" />
        </View>
        <CurrencyInput
          className="text-white text-lg font-extrabold pb-3"
          value={basketTotal}
          prefix="₱"
          delimiter=","
          separator="."
          precision={2}
        />
      </TouchableOpacity>
    </View>
  );
};
export default BasketIcon;
