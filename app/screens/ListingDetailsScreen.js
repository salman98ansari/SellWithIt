import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  // console.log(listing);
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailcontainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subtitle}>${listing.price}</AppText>
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
