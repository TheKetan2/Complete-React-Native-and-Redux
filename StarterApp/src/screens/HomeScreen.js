import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
const HomeScreen = props => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => props.navigation.navigate("Components")}
      ></Button>
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
