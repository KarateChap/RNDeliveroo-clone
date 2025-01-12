import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "@/features/basketSlice";
import { selectRestaurant } from "@/features/restaurantSlice";
import { RootStackParamList } from "@/navigation/types";
import { urlFor } from "@/sanity";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import CurrencyInput from "react-native-currency-input";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

const BasketScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1  ">
        <View className="p-5 border-b-4 border-[#fa878b] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#F5585C" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center gap-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1535/1535791.png",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#F5585C]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(
            ([key, items]: [string, any[]]) => (
              <View
                key={key}
                className="flex-row items-center gap-3 bg-white py-2 px-5"
              >
                <Text className="text-[#F5585C]">{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <CurrencyInput
                  className="text-gray-600"
                  value={items[0]?.price}
                  prefix="₱"
                  delimiter=","
                  separator="."
                  precision={2}
                />

                <TouchableOpacity>
                  <Text
                    className="text-[#F5585C] text-xs"
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            )
          )}
        </ScrollView>

        <View className="p-5 bg-white mt-5 gap-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <CurrencyInput
              className="text-gray-400"
              value={basketTotal}
              prefix="₱"
              delimiter=","
              separator="."
              precision={2}
            />
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <CurrencyInput
              className="text-gray-400"
              value={50}
              prefix="₱"
              delimiter=","
              separator="."
              precision={2}
            />
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="font-bold">Order Total</Text>
            <CurrencyInput
              className=" font-extrabold"
              value={basketTotal + 50}
              prefix="₱"
              delimiter=","
              separator="."
              precision={2}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PreparingOrder");
            }}
            className="rounded-lg bg-[#F5585C] p-4 mb-5"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BasketScreen;
