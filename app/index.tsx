import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const carLogo = require("@/assets/images/carLogo.png");

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/input");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={carLogo} style={styles.carLogo} />
      <Text style={styles.text1}>Smart Auto Loan</Text>
      <Text style={styles.text2}>วางแผนออกรถฉบับมือโปร</Text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  carLogo: {
    width: 150,
    height: 150,
  },
  text2: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
  },
  text1: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16354b",
  },
});
