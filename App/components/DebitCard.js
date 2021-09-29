import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

const DebitCard = ({ balance, currency, digit, name, expire, type, color }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.header}>
        <Text style={styles.currentBal}>Current Balance</Text>
        <Image
          source={
            type === "master"
              ? require("../assets/mastercard.png")
              : require("../assets/visa.png")
          }
          style={styles.logo}
        />
      </View>
      <View style={styles.currencyBal}>
        <Text style={styles.currency}>{currency}</Text>
        <Text style={styles.bal}> {balance}</Text>
      </View>
      <View style={styles.cardNum}>
        <Text style={styles.number}>
          **** {` `} **** {` `} **** {` `} {digit}
        </Text>
      </View>
      <View style={styles.nameExp}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.expiry}>
          <Text style={styles.exp}>Exp.Date</Text>
          <Text style={styles.date}>{expire}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
  },
  cardNum: {
    height: "25%",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  card: {
    width: 328,
    height: 160,
    borderRadius: 20,
    paddingHorizontal: "6%",
    paddingVertical: "2%",
    marginRight: 10,
  },
  currentBal: {
    color: colors.white,
    fontSize: 18,
  },
  currencyBal: {
    flexDirection: "row",
    alignItems: "center",
    height: "25%",
  },
  currency: {
    color: colors.white,
    backgroundColor: colors.skyBlue,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontWeight: "900",
  },
  date: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
  },
  expiry: {
    marginTop: "-3%",
  },
  bal: {
    color: colors.white,
    paddingHorizontal: 8,
    fontSize: 24,
    fontWeight: "bold",
  },
  name: {
    color: colors.white,
    fontSize: 20,
  },
  nameExp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "25%",
  },
  number: {
    color: colors.white,
    fontSize: 23,
    fontWeight: "900",
  },
  exp: {
    color: colors.white,
    fontSize: 12,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default DebitCard;
