import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

const ResultCard = ({ result }) => {
  return (
    <View style={styles.containerMain}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.titleStyle}>{result.name}</Text>
      <View style={styles.ratingContainer}>
        <Text>{result.rating} Stars, </Text>
        <Text>{result.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    borderColor: "grey",
    height: 200,
    width: 250,
    borderRadius: 5,
    flexDirection: "column",
    alignContent: "space-between",
    shadowColor: "grey",
    padding: 12
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 5
  },
  titleStyle: {
    fontWeight: "bold"
  },
  rateReview: {
    color: "grey",
    fontSize: 14,
    opacity: 0.7
  },
  ratingContainer: {
    flexDirection: "row",
    alignContent: "flex-start"
  }
});
export default ResultCard;
