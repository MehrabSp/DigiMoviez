// import { View, Text } from 'react-native'
import { useState, memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExceptionErrorModal } from "./Home";
import App from "./App";

const Stack = createNativeStackNavigator();

function Exc() {
  const [colorStatus, setColorStatus] = useState("grey");
  const [error, setError] = useState(false);
  const [hide, sethide] = useState(false);
  return (
    <ExceptionErrorModal hide={hide} error={error} colorStatus={colorStatus} />
  );
}

const Render = memo(function () {
  return (
    <>
      <Exc />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={App}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="Details" component={FuckingDepress} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

export { Render };
