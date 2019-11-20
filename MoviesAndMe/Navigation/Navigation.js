import React from "react";
import Search from "../Components/Search";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const searchstacknavigator = createStackNavigator(
  {
    Index: Search
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Search"
    }
  }
);

export default createAppContainer(searchstacknavigator);
