import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Text, Button, Input } from "react-native-elements";

import Spacer from "./Spacer";

const AuthForm = ({ errorMessage, headerText, onsubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onsubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 15,
    marginLeft: 15
  },
  errorMessage: {
    color: "green",
    fontSize: 15,
    marginLeft: 15
  }
});

export default AuthForm;
