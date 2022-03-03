import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailcontainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.subtitle}>$100</AppText>
      </View>
      <View style={styles.usercontainer}>
        <ListItem
          image={require("../assets/avatar.png")}
          title="Salman"
          subtitle="5 Listing"
        />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  detailcontainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  usercontainer: {
    marginVertical: 30,
  },
});
