import { createSlice } from "@reduxjs/toolkit";
import services from "../services/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart(state, action) {
      return action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export const initializeCart = (item) => {
  return async (dispatch) => {
    const cartItem = await services.addToCart(item);

    dispatch(setCart(cartItem));
  };
};

export default cartSlice.reducer;
