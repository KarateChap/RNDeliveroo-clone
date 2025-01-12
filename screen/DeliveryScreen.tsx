import { selectRestaurant } from "@/features/restaurantSlice";
import { RootStackParamList } from "@/navigation/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { WebView } from "react-native-webview";

const DeliveryScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#F5585C] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
              })
            }
          >
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className=" text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md px-6 py-4 z-50 shadow-md">
          <View className="flex-row relative">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={require("../assets/images/delivery.gif")}
              className="h-[60px] w-[100px] absolute right-10"
            />
          </View>
          <Text className="text-gray-500 text-sm mt-1">
            Your order at {restaurant.title} is being prepared...
          </Text>
        </View>
      </SafeAreaView>
      <WebView
        source={{
          uri: `https://maps.google.com/maps?q=${restaurant.lat},${restaurant.long}&z=15`,
        }}
        style={{ width: "100%", height: 450 }}
      />
    </View>
  );
};

export default DeliveryScreen;
