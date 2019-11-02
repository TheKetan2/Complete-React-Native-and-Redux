import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  let [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)}></Button>

      <Text>Current Count: {counter}</Text>

      <Button title="Decrease" onPress={() => setCounter(counter - 1)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
