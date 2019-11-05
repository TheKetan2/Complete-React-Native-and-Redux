import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(result.image_url);
  return (
    <View>
      <View style={{ height: 250 }}>
        <Image
          style={{ alignSelf: "stretch", height: "100%" }}
          source={{ uri: result.image_url }}
        />

        <Text style={styles.titleStyle}>{result.name}</Text>
      </View>
      <Text>Photos : </Text>
      <FlatList
        horizontal
        data={result.photos}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item }} />
        )}
        url
        keyExtractor={photo => photo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});

export default ResultShowScreen;
