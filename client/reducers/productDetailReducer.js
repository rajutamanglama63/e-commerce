import { createSlice } from "@reduxjs/toolkit";
import services from "../services/products";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {},
  reducers: {
    setProductDetail(state, action) {
      return action.payload;
    },
  },
});

export const { setProductDetail } = productDetailSlice.actions;

export const initProductDetail = (id) => {
  return async (dispatch) => {
    const productInfo = await services.getProductDetail(id);

    dispatch(setProductDetail(productInfo));
  };
};

export default productDetailSlice.reducer;
