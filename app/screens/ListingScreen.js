import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppButton from "../components/AppButton";

import listingApi from "../api/listing";
import AppText from "../components/AppText/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

// const listing = [
//   {
//     id: 1,
//     title: "Red Jacket For Sale",
//     price: "$100",
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great Condition",
//     price: "$1000",
//     image: require("../assets/couch.jpg"),
//   },
// ];

const ListingScreen = ({ navigation }) => {
  const {
    data: listing,
    error,
    loading,
    request: loadListings,
  } = useApi(listingApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Could't Retrive The listings</AppText>
            <AppButton title="Retry" onPress={() => loadListings()} />
          </>
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={listing}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
