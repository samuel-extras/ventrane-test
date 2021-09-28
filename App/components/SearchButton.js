import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const SearchButton = (props) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="magnify"
        color={colors.royalBlue}
        size={25}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default SearchButton;
