import Categories from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  ScrollView,
  PixelRatio,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const scale = PixelRatio.get();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const isIOS = Platform.OS === "ios" ? true : false;

  return (
    <View className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 gap-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>

          <View className="flex-row gap-2 ">
            <Text className="font-bold text-xl">Current Location</Text>
            <View className="pt-1">
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center gap-2 pb-2 px-4">
        <View
          className={`flex-row flex-1 gap-2 bg-gray-200 ${
            isIOS ? "p-3" : "px-3 py-0"
          }`}
        >
          <View className={`${!isIOS && "pt-3"}`}>
            <MagnifyingGlassIcon color="gray" size={20} />
          </View>
          <TextInput placeholder="Restaurants and cuisines" />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="12345"
          title="Featured"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
