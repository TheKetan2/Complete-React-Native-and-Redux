import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./component/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "./component/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults("");

  const filterResultsByPrice = price => {
    return results.filter(result => result.price == price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>
        {results.length ? `${results.length} results found` : `${errorMsg}`}{" "}
      </Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
