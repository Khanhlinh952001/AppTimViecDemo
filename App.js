import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./Component/Home/HomeScreen";
import List from "./Component/List/List";
import User from "./Component/User/User";
import Cart from "./Component/Cart/Cart";
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShow: false }}>
        <Stack.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen name="pickup" component={Pickup} options={{ headerShown:false }} />
        <Stack.Screen name="pickuped" component={Pickuped} options={{ headerShown:false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
