import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => navigation.navigate("Components")}
      ></Button>
      <View style={styles.buttonStyle}></View>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      ></Button>
      <View style={styles.buttonStyle}></View>
      <Button
        title="Go to ImageSearch Demo"
        onPress={() => navigation.navigate("imgScreen")}
      ></Button>
      <View style={styles.buttonStyle}></View>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      ></Button>
      <View style={styles.buttonStyle}></View>
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      ></Button>
      <View style={styles.buttonStyle}></View>
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      ></Button>
      <View style={styles.buttonStyle}></View>
      <Button
        title="Go to TextScreen Demo"
        onPress={() => navigation.navigate("Textscreen")}
      ></Button>
      <View style={styles.buttonStyle}></View>
      <Button
        title="Go to BoxScreen Demo"
        onPress={() => navigation.navigate("Box")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  buttonStyle: {
    height: 20
  }
});

export default HomeScreen;
