import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "./context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost}></Button>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={item => item.title}
      ></FlatList>
    </View>
  );
};

export default IndexScreen;
