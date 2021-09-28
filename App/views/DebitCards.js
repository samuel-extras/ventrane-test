import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import DebitCard from "../components/DebitCard";
import colors from "../config/colors";

const cards = [
  {
    name: "Samuel Dior",
    value: 1,
    type: "master",
    color: colors.tomatoe,
    digit: 2324,
    expire: "10/22",
    currency: "CAD",
    balance: "9005.74",
  },
  {
    name: "Emmanuel Tobi",
    value: 2,
    type: "visa",
    color: colors.primary,
    digit: 1234,
    expire: "03/28",
    currency: "USD",
    balance: "640.47",
  },
  {
    name: "Justin Moye",
    value: 3,
    type: "master",
    color: colors.navy,
    digit: 4382,
    expire: "12/40",
    currency: "NGN",
    balance: "305.00",
  },
];

const DebitCards = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        initialScrollIndex={1}
        contentOffset={{
          x: 1,
          y: 1,
        }}
      >
        <FlatList
          data={cards}
          horizontal
          keyExtractor={(item) => item.value.toString()}
          nestedScrollEnabled
          initialScrollIndex={1}
          renderItem={({ item }) => (
            <DebitCard
              name={item.name}
              type={item.type}
              color={item.color}
              currency={item.currency}
              expire={item.expire}
              digit={item.digit}
              balance={item.balance}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "25%",
    paddingVertical: 2,
    justifyContent: "center",
  },
});

export default DebitCards;
