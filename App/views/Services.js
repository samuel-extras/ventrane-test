import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ServiceCard from "../components/ServiceCard";
import colors from "../config/colors";

const services = [
  { label: "Wallet", value: 1, icon: "wallet", color: colors.tomatoe },
  {
    label: "Transfer",
    value: 2,
    icon: "bank-transfer",
    color: colors.lightSky,
  },
  { label: "Pay", value: 3, icon: "hand-heart", color: colors.warining },
  {
    label: "Topup",
    value: 4,
    icon: "cellphone-arrow-down",
    color: colors.success,
  },
];

const Services = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Services</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.value.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <ServiceCard label={item.label} icon={item.icon} color={item.color} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "20%",
    alignItems: "flex-start",
    paddingVertical: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.black,
    paddingBottom: 10,
    paddingLeft: 15,
  },
});

export default Services;
