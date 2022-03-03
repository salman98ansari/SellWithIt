import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great Condition",
    price: "$1000",
    image: require("../assets/jacket.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
