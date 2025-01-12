import Categories from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import { useNavigation } from "@react-navigation/native";
import sanityClient from "../sanity";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"]{
      ...,
      restaurants[]-> {
        ...,
        dishes[]->,
          type-> {
            name
          }
        }
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  const isIOS = Platform.OS === "ios" ? true : false;

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 gap-2">
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1535/1535791.png",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>

          <View className="flex-row gap-2 ">
            <Text className="font-bold text-xl">Current Location</Text>
            <View className="pt-1">
              <ChevronDownIcon size={20} color="#F5585C" />
            </View>
          </View>
        </View>

        <UserIcon size={35} color="#F5585C" />
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

        <AdjustmentsVerticalIcon color="#F5585C" />
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

        {featuredCategories?.map((category: any) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
