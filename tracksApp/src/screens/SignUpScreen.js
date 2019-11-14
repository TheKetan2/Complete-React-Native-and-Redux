import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text> Signup Screen</Text>
      <Button
        title="Go to sign in"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
