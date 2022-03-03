import { StatusBar } from "expo-status-bar";
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
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const { height, width } = useDimensions();
  return (
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red Jacket for Sale"
    //     subtitle="$ 100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    // <Screen>
    //   <ListItem
    //     title="Mytitle"
    //     subtitle="my Subtitle"
    //     ImageComponent={
    //       <Icon
    //         name="email"
    //         size={40}
    //         backgroundColor="red"
    //         iconColor="white"
    //       />
    //     }
    //   />
    //   {/* <Icon name="email" size={100} backgroundColor="red" iconColor="white" /> */}
    // </Screen>

    <ListingScreen />
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
