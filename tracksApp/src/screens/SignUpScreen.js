import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Header } from "react-native-elements";
import Spacer from "../conponents/Spacer";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign Up for Tracker</Text>
      </Spacer>

      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 200
  }
});

export default SignUpScreen;
