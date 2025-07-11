/*
import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import Tabs from "./components/Tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NewsDetails from "./Screens/NewsDetails";
import 'react-native-gesture-handler';


export default function App() {
  return (
    <SafeAreaProvider>
      <Tabs />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C35",
  },
});


import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./components/MainTabs";
import NewsDetail from "./components/NewsDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabs"
          screenOptions={{
            gestureEnabled: true,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
*/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';

import MainTabs from "./components/MainTabs";         // Main app content
import NewsDetail from "./components/NewsDetail";     // News detail screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#282c35" barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{ gestureDirection: "horizontal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

