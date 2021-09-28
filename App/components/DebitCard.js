import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

const DebitCard = ({ balance, currency, digit, name, expire, type, color }) => {
  return (
    <View style={[styles.container, {backgroundColor:color} ]}>
      <View style={styles.balLogo}>
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
      <View>
        <Text style={styles.cardNum}>
          **** {` `} **** {` `} **** {` `} {digit}
        </Text>
      </View>
      <View style={styles.nameExp}>
        <Text style={styles.name}>{name}</Text>
        <View>
          <Text style={styles.exp}>Exp.Date</Text>
          <Text style={styles.date}>{expire}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  balLogo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNum: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 23,
    fontWeight: "900",
  },
  container: {
    width: 320,
    height: 160,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginHorizontal: 4,
  },
  currentBal: {
    color: colors.white,
    fontSize: 18,
  },
  currencyBal: {
    flexDirection: "row",
    alignItems: "center",
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
    alignItems: "center",
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
