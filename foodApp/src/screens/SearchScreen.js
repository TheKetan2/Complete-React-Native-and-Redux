import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./component/SearchBar";

const SearchScreen = () => {
  return (
    <View>
      <SearchBar></SearchBar>
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
