import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountProvider } from "./Context/AccountContext";
import Screen_01 from "./components/Screen_01";
import Screen_02 from "./components/Screen_02";
import Screen_03 from "./components/Screen_03";
import Screen_04 from "./components/Screen_04";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AccountProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Screen_01"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Screen_01" component={Screen_01} />
          <Stack.Screen name="Screen_02" component={Screen_02} />
          <Stack.Screen name="Screen_03" component={Screen_03} />
          <Stack.Screen name="Screen_04" component={Screen_04} />
        </Stack.Navigator>
      </NavigationContainer>
    </AccountProvider>
  );
}
