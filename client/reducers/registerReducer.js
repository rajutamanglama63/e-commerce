import { createSlice } from "@reduxjs/toolkit";
import services from "../services/users";

const registerSlice = createSlice({
  name: "register",
  initialState: null,
  reducers: {
    setUserRegistration(state, action) {
      return action.payload;
    },
  },
});

export const { setUserRegistration } = registerSlice.actions;

export const userRegistration = (data) => {
  return async (dispatch) => {
    const new_user = await services.userSignup(data);
    dispatch(new_user);
  };
};

export default registerSlice.reducer;
