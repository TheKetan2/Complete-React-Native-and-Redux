import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.resultStyle}>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  resultStyle: {
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default ResultsList;
