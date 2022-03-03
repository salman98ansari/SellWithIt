import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText/AppText";
import Icon from "./Icon";

const ListItem = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightAction,
  ImageComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent && ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={{ marginLeft: 10, justifyContent: "center" }}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // marginRight: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
});
