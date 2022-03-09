import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={{ flex: 0.1 }}>
        <View style={styles.container}>
          <AppText style={styles.text}>No internet Connection</AppText>
        </View>
      </View>
    );
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});
