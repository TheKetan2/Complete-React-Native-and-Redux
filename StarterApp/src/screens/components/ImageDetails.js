import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetails = props => {
  return (
    <View>
      <Image source={props.imgUrl} />
      <Text>{props.title}</Text>
      <Text>Image Score is - {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetails;
