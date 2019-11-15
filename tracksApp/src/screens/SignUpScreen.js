import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Header } from "react-native-elements";
import Spacer from "../conponents/Spacer";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>
          {" "}
          Sign Up for Tracker {email} {password}
        </Text>
      </Spacer>

      <Input
        label="Email"
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        autoCorrect={false}
      />
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
