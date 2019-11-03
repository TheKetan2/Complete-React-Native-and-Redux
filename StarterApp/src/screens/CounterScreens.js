import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNT_INCREAMENT = 2;

const reducer = (state, action) => {
  switch (action.type) {
    case "more":
      return { ...state, counter: state.counter + action.payload };
    case "less":
      return { ...state, counter: state.counter + action.payload };
    default:
      state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0
  });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "more", payload: COUNT_INCREAMENT })}
      ></Button>

      <Text>Current Count: {counter}</Text>

      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "less", payload: -1 * COUNT_INCREAMENT })
        }
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
