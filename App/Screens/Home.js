import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../config/colors";
import DebitCards from "../views/DebitCards";
import Header from "../views/Header";
import Services from "../views/Services";
import Transactions from "../views/Transactions";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <DebitCards />
      <Services />
      <Transactions />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ghostWHite,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
