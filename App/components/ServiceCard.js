import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ServiceCard = ({ label, color, icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: color }]}
        onPress={onPress}
      >
        <MaterialCommunityIcons name={icon} color={colors.white} size={34} />
      </TouchableOpacity>
      <Text style={styles.label}> {label} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 54,
    height: 54,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  container: {
    width: "25%",
    alignItems: "center",
  },
  label: {
    color: colors.black,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    marginTop: "10%",
  },
});

export default ServiceCard;
