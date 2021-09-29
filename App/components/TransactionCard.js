import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const TransactionCard = ({ amount, icon, title, subTitle, inner, outer }) => {
  return (
    <TouchableHighlight style={styles.card}>
      <View style={styles.container}>
        <View style={[styles.logo, { backgroundColor: outer }]}>
          <View style={[styles.logoInner, { backgroundColor: inner }]}>
            <FontAwesome5 name={icon} color={colors.white} size={22} />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
        <Text style={[styles.amount, { color: outer }]}>${amount}</Text>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    marginVertical: "2%",
  },
  container: {
    flexDirection: "row",
    paddingVertical: 18,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    alignItems: "center",
    width: "100%",
    borderRadius: 12,
    elevation: 1,
  },
  detailsContainer: {
    marginLeft: 20,
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  logoInner: {
    width: "80%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  subTitle: {
    color: colors.slateGray,
    fontSize: 16,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: "2%",
    fontSize: 20,
    color: colors.slateGray,
  },
});

export default TransactionCard;
