import { createSlice } from "@reduxjs/toolkit";
import services from "../services/users";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    msg: "",
    user: {},
  },
  reducers: {
    setUserRegistration(state, action) {
      const responsedData = action.payload;

      // console.log(typeof responsedData === "string");

      return typeof responsedData === "string"
        ? { ...state, msg: responsedData, user: {} }
        : { ...state, msg: "", user: responsedData.newUser };
    },
  },
});

export const { setUserRegistration } = registerSlice.actions;

export const userRegistration = (data) => {
  return async (dispatch) => {
    const user = await services.userSignup(data);
    // console.log(user);
    dispatch(setUserRegistration(user));
  };
};

export default registerSlice.reducer;
