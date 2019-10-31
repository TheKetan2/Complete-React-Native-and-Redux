import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return (
    <Text style={styles.textStyle}>This is Components Screen Component</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24
  }
});

export default ComponentScreen;
