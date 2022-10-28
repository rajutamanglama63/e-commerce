import { createSlice } from "@reduxjs/toolkit";
import services from "../services/products";

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
    const allProductItem = await services.getProducts();

    dispatch(setProducts(allProductItem));
  };
};

export default productSlice.reducer;
