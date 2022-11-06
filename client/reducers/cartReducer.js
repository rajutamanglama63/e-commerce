import { createSlice } from "@reduxjs/toolkit";
import services from "../services/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart(state, action) {
      return [...state, action.payload];
    },
    getCartItems(state, action) {
      return action.payload;
    },
  },
});

export const { setCart, getCartItems } = cartSlice.actions;

export const initializeCart = (item) => {
  return async (dispatch) => {
    const cartItem = await services.addToCart(item);

    dispatch(setCart(cartItem));
  };
};

export const cartItems = () => {
  return async (dispatch) => {
    const cartItemData = await services.allCartItems();

    dispatch(getCartItems(cartItemData));
  };
};

export default cartSlice.reducer;
