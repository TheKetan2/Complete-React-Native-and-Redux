import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Header } from "react-native-elements";
const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text> Track List Screen</Text>
      <Button
        title="GO to track details"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </View>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    header: (
      <Header
        centerComponent={{ text: "Track List", style: { color: "#fff" } }}
      ></Header>
    )
  };
};
const styles = StyleSheet.create({});

export default TrackListScreen;
