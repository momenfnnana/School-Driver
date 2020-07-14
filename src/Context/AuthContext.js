import { AsyncStorage } from "react-native";
import createDataContext from './createDataContext'
const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, isSignedIn: true };
    case "signout":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

const signin = dispatch => {
  return () => {
    dispatch({
      type: "signin"
    })
  }
}

const signout = dispatch => {
  return () => {
    dispatch({
      type: "signout"
    })
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout },
  { token: null, errorMessage: "", isSignedIn: false }
);
