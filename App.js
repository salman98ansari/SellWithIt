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
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Button Press", "My Message", [
            {
              text: "yes",
              onPress: () => {
                console.log("yes");
              },
            },
            {
              text: "no",
              onPress: () => {
                console.log("no");
              },
            },
          ]);
        }}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
      </TouchableOpacity>
      <Button title="Button" />
    </SafeAreaView>
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
