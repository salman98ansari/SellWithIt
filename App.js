import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import OfflineNotice from "./app/components/OfflineNotice";
import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import naigationTheme from "./app/navigation/naigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import Netinfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  // Netinfo.fetch().then((netInfo) => console.log(netInfo));
  // Netinfo.addEventListener((netInfo) => console.log(netInfo));

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={naigationTheme}>
        <AuthNavigator />
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </>
  );
}
