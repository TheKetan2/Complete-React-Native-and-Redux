import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator({
  homescreen: HomeScreen
});

export default createAppContainer(navigator);
