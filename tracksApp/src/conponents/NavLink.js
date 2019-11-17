import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ linkText, routeName, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.signIn}>{linkText} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signIn: {
    color: "blue",
    fontSize: 15,
    marginLeft: 15
  }
});

export default withNavigation(NavLink);
