import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { red } from "ansi-colors";

const ListScreen = () => {
  const nameList = [
    { name: "Ketan1", age: 20 },
    { name: "Ketan2", age: 20 },
    { name: "Ketan3", age: 20 },
    { name: "Ketan4", age: 20 },
    { name: "Ketan5", age: 20 },
    { name: "Ketan1", age: 20 },
    { name: "Ketan2", age: 20 },
    { name: "Ketan3", age: 20 },
    { name: "Ketan4", age: 20 },
    { name: "Ketan5", age: 20 }
  ];
  function Item({ title }) {
    return (
      <View>
        <Text> {title}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={nameList}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {item.name + " " + " " + item.age}
          </Text>
        )}
        keyExtractor={friend => friend.name}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "pink",
    borderColor: "green",
    borderWidth: 5,
    marginHorizontal: 2,
    height: 300,
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 10
  }
});
export default ListScreen;
