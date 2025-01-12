import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screen/HomeScreen";
import "../global.css";
import RestaurantScreen from "@/screen/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "../store";
import BasketScreen from "@/screen/BasketScreen";
import PreparingOrderScreen from "@/screen/PreparingOrderScreen";
import DeliveryScreen from "@/screen/DeliveryScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  const RootStack = () => {
    return (
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    );
  };

  return <RootStack />;
};

export default App;
