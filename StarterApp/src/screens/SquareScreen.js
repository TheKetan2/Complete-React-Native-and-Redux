import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "./ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    if (color + change > 255 || color + change < 0) return false;
    return true;
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          if (setColor(red, COLOR_INCREMENT)) setRed(red + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          if (setColor(red, -COLOR_INCREMENT)) setRed(red - COLOR_INCREMENT);
        }}
        color="Red"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          if (setColor(green, COLOR_INCREMENT))
            setGreen(green + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          if (setColor(green, -COLOR_INCREMENT))
            setGreen(green - COLOR_INCREMENT);
        }}
        color="Green"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          if (setColor(blue, COLOR_INCREMENT)) setBlue(blue + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          if (setColor(blue, -COLOR_INCREMENT)) setBlue(blue - COLOR_INCREMENT);
        }}
        color="Blue"
      ></ColorCounter>
      <Text>Square Screen</Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green} , ${blue})`
        }}
      ></View>
      <Text>Red: {red}</Text>
      <Text>Green: {green}</Text>
      <Text>Blue: {blue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
