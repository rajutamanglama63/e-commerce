import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/products";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const initializeProducts = () => {
  return async (dispatch) => {
    const allProductItem = await getProducts();

    dispatch(setProducts(allProductItem.data));
  };
};

export default productSlice.reducer;
