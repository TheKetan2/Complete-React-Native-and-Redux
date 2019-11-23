import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Header, ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state.map(item => item.name));
  const places = state.map(item => item.name);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text> Track List Screen</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem title={item.name} chevron />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      {/* <Button
        title="Go to track details"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button> */}
    </View>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks"
};
const styles = StyleSheet.create({});

export default TrackListScreen;
