import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
const ColorScreen = () => {
  let [colors, changeColor] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          changeColor([...colors, randomColor()]);
        }}
      ></Button>
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
        keyExtractor={item => item}
      />
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
