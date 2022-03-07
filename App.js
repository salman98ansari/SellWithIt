import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  Dimensions,
  TextInput,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import ListingScreen from "./app/screens/ListingScreen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { BackHandler } from "react-native-web";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  const { landscape } = useDeviceOrientation();
  const { height, width } = useDimensions();
  const [imageuris, setImageuris] = useState([]);

  const handleAdd = (uri) => {
    setImageuris([...imageuris, uri]);
  };

  const handleRemove = (uri) => {
    setImageuris(imageuris.filter((imageUri) => imageUri !== uri));
  };

  return (
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     placeholder="Category"
    //     icon="apps"
    //   />
    //   <AppTextInput placeholder="Enter Email" icon="email" />
    // </Screen>

    // <Screen>
    //   <Text>Salman</Text>

    //   <ImageInputList
    //     imageUris={imageuris}
    //     // onChangeImage={(uri) => setImageuri(uri)}
    //     onAddImage={(uri) => handleAdd(uri)}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
    <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
