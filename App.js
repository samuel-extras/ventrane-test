import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import DebitCard from "./App/components/DebitCard";
import ServiceCard from "./App/components/ServiceCard";
import TransactionCard from "./App/components/TransactionCard";
import colors from "./App/config/colors";
import TabNavigator from "./App/navigations/TabNavigator";
import DebitCards from "./App/views/DebitCards";
import Header from "./App/views/Header";
import Services from "./App/views/Services";
import Transactions from "./App/views/Transactions";

export default function App() {
  return <TabNavigator />;
}
