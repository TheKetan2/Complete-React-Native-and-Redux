import { AsyncStorage } from "react-native";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("TrackList");
    console.log(AsyncStorage.getItem("token"));
  } catch (err) {
    dispatch({ type: "add_errcor", payload: "Something went wrong" });
  }
};

const signIn = dispatch => {
  return ({ email, password }) => {
    // make api request to sign in with email and password
  };
};

const signOut = dispatch => {
  return () => {
    // make api request to sign out
  };
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { token: "", errorMessage: "" }
);
