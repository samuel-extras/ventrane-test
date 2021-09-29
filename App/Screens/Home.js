import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import colors from "../config/colors";
import DebitCards from "../views/DebitCards";
import Header from "../views/Header";
import Services from "../views/Services";
import Transactions from "../views/Transactions";
import useLocation from "../hooks/useLocation";

const Home = () => {
  const location = useLocation();
  const [address, setAddress] = useState();
  useEffect(() => {
    getAddress();
  }, []);
  const getAddress = async () => {
    try {
      let res = await Location.reverseGeocodeAsync(location);

      for (let item of res) {
        let addrs = `${item.district}, ${item.city}.`;
        setAddress(addrs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header address={address} />
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
