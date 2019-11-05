import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultCard from "./ResultCard";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) return null;
  return (
    <View style={{ marginTop: 15, marginLeft: 15 }}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultCard result={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={result => result.id}
      />
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

export default withNavigation(ResultsList);
