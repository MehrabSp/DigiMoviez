/**
 * Start in 8/31/23
 * @MehrabSp
 * MRB -> 9/3/23
 */

import React from "react";
import { View, StyleSheet } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import {Entypo} from "@expo/vector-icons";

import { Render } from "./src/Render";

export default function () {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <Render />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
