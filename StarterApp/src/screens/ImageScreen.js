import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "./components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        score="20"
        imgUrl={require("../../assets/img/forest.jpg")}
      />
      <ImageDetails
        title="Beach"
        score="22"
        imgUrl={require("../../assets/img/beach.jpg")}
      />
      <ImageDetails
        title="Mountain"
        score="23"
        imgUrl={require("../../assets/img/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
