import { createSlice } from "@reduxjs/toolkit";
import services from "../services/users";

const loginSlice = createSlice({
  name: "login",
  initialState: window.localStorage.getItem("loggedInUser"),
  reducers: {
    setUserLogin(state, action) {
      return action.payload;
    },
    removeUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUserLogin, removeUser } = loginSlice.actions;

export const userLogin = (email, password) => {
  return async (dispatch) => {
    const resultData = await services.userSignin({ email, password });
    window.localStorage.setItem("loggedInUser", JSON.stringify(resultData));

    dispatch(setUserLogin(resultData));
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(removeUser());
  };
};

export default loginSlice.reducer;
