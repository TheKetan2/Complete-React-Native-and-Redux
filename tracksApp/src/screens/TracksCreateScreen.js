import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import Maps from "../conponents/Map";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import userLocation from "../hooks/userLocation";
import TrackForm from "../conponents/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = userLocation(isFocused || state.recording, callback);

  // console.log(isFocused);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <Text h2> Track Create Screen</Text>
        <Maps></Maps>
      </View>
      {/* <NavigationEvents onWillBlur={() => {}} /> */}

      {err ? <Text>Please, enable location services.</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};
TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />
};
const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
