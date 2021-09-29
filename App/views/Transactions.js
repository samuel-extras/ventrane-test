import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import TransactionCard from "../components/TransactionCard";
import colors from "../config/colors";

const transactions = [
  {
    title: "Dribbble",
    subtitle: "Payment using dribbble",
    amount: 960,

    value: 1,
    icon: "dribbble",
    inner: colors.indianRed,
    outer: colors.darkSalmon,
  },
  {
    title: "Google Wallet",
    subtitle: "Payment via google wallet ",
    amount: 126,
    value: 2,
    icon: "google-wallet",
    inner: colors.forestGreen,
    outer: colors.yellowGreen,
  },
  {
    title: "Paypal",
    subtitle: "Payment received ",
    amount: 683,
    value: 3,
    icon: "paypal",
    inner: colors.navy,
    outer: colors.navy,
  },
];

const Transactions = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Recent Transaction</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.value.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TransactionCard
            title={item.title}
            subTitle={item.subtitle}
            icon={item.icon}
            inner={item.inner}
            outer={item.outer}
            amount={item.amount}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: "4%",
    marginTop: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 22,
    color: colors.black,
    marginBottom: "4%",
  },
});

export default Transactions;
