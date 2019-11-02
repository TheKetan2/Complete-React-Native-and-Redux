import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
colors = ["rbg(255, 0, 0)", "rbg(0,255, 0)", "rbg(0,0,255)", "rbg(255,0,255)"];
const ColorScreen = () => {
  let [clr, changeColor] = useState(`rgb(0, 255, 255)`);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => changeColor((clr = randomColor()))}
      ></Button>
      <View style={{ height: 100, width: 100, backgroundColor: clr }}></View>
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
