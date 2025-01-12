import { RootStackParamList } from "@/navigation/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import FastImage from "react-native-fast-image";

const PreparingOrderScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 0);
  }, []);

  return (
    <SafeAreaView className="bg-[#F5585C] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/images/animation-green.gif")}
        animation="zoomIn"
        iterationCount={1}
        className="h-40 w-40"
      />
      <View className="justify-center items-center gap-4 mt-[-20px]">
        <Animatable.Text
          className="text-white font-bold mb-[-2] text-sm"
          animation="pulse"
          easing="ease-out"
          iterationCount={2}
        >
          Please wait while our restaurant(s) prepare your order
        </Animatable.Text>

        <Progress.Circle
          size={20}
          indeterminate={true}
          color="white"
          borderWidth={1}
        />
      </View>
    </SafeAreaView>
  );
};
export default PreparingOrderScreen;
