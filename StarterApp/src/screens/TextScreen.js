import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AuthSession } from "expo";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ margin: 20 }}>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={text => setName(text)}
      ></TextInput>
      <Text>My name is {<Text style={{ color: "green" }}> {name}</Text>}</Text>
      <View style={{ height: 20 }}></View>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={text => setPassword(text)}
      ></TextInput>
      <Text>
        {password.length < 8 ? (
          <Text style={{ color: "red" }}>
            Password length should be greater than 8 characters
          </Text>
        ) : (
          <Text style={{ color: "green" }}>Looks Perfect!</Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  }
});
export default TextScreen;
