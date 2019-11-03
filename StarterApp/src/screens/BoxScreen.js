import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.rowStyle}>
        <Text style={styles.textOneStyle}>Child 1</Text>
        <Text style={styles.textTwoStyle}>Child 2</Text>
      </View>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black"
  },
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "pink",
    height: 100,
    width: 100,
    backgroundColor: "pink"
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "pink",
    height: 100,
    width: 100,
    backgroundColor: "purple"
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "green",
    alignSelf: "center",
    height: 100,
    width: 100,
    backgroundColor: "green"
  }
});

export default BoxScreen;
