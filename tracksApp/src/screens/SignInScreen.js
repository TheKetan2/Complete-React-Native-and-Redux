import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AuthForm from "../conponents/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../conponents/NavLink";

const SignInScreen = ({ navigation }) => {
  const { state, signIn } = useContext(AuthContext);

  console.log(state);

  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        headerText="Sign In"
        onsubmit={({ email, password }) => signIn({ email, password })}
        submitButtonText="Sign In"
      />
      <NavLink
        linkText="Don't have an account? Sign Up instead."
        routeName="SignUp"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 200,
    marginLeft: 15
  },
  signIn: {
    color: "blue",
    fontSize: 15,
    marginLeft: 15
  }
});
export default SignInScreen;
