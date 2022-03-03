import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeicon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteicon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeicon: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteicon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});
