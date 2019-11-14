import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

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

const styles = StyleSheet.create({});

export default TrackListScreen;
