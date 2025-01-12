import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screen/HomeScreen";
import "../global.css";
import RestaurantScreen from "@/screen/RestaurantScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  const RootStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    );
  };

  return <RootStack />;
};

export default App;
