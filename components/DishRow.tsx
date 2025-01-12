import { urlFor } from "@/sanity";
import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CurrencyInput from "react-native-currency-input";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

type DishRowProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const DishRow = ({ id, name, description, price, image }: DishRowProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <CurrencyInput
                className="text-gray-400"
                value={price}
                prefix="₱"
                delimiter=","
                separator="."
                precision={2}
              />
            </Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center gap-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
export default DishRow;
