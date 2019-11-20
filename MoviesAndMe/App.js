import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Navigation from "./Navigation/Navigation";

const navigator = createStackNavigator(
  {
    Index: Navigation
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Rechercher"
    }
  }
);

export default createAppContainer(navigator);
