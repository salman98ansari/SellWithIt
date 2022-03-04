import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppText from "./AppText/AppText";

const PikerItem = ({ item, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PikerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
