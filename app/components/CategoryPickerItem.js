import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText/AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
  },
});
