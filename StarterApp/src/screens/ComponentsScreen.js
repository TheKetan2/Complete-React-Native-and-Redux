import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const myName = "Ketan";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.myNameStyle}> My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  myNameStyle: {
    fontSize: 20
  }
});

export default ComponentScreen;
