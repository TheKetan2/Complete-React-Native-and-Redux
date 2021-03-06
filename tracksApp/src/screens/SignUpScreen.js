import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../conponents/AuthForm";
import NavLink from "../conponents/NavLink";

const SignUpScreen = ({ navigation }) => {
  const { state, signUp, clearErrorMsg, tryLocalSignIn } = useContext(
    AuthContext
  );

  console.log(state);

  // useEffect(() => {
  //   tryLocalSignIn();
  // }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onDidBlur={clearErrorMsg} />
      <AuthForm
        errorMessage={state.errorMessage}
        headerText="Sign Up"
        onsubmit={({ email, password }) => signUp({ email, password })}
        submitButtonText="Sign Up"
      />
      <NavLink
        linkText="Already have an account? Sign in instead."
        routeName="SignIn"
      />
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
    marginBottom: 200,
    marginLeft: 15
  },
  signIn: {
    color: "blue",
    fontSize: 15,
    marginLeft: 15
  }
});

export default SignUpScreen;
