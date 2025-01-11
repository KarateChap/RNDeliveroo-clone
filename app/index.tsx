import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screen/HomeScreen";
import "../global.css";

const App = () => {
  const Stack = createNativeStackNavigator();

  const RootStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  return <RootStack />;
};

export default App;
