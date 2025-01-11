import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

type FeaturedRow = {
  id: string;
  title: string;
  description: string;
};

const FeaturedRow = ({ id, title, description }: FeaturedRow) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-sm text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}
        <RestaurantCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          short_description="This is a Test short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          short_description="This is a Test short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          short_description="This is a Test short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          short_description="This is a Test short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          short_description="This is a Test short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          short_description="This is a Test short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          short_description="This is a Test short description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
