import { createSlice } from "@reduxjs/toolkit";
import services from "../services/orders";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    setOrders(state, action) {
      return action.payload;
    },
  },
});

export const { setOrders } = ordersSlice.actions;

export const initOrders = () => {
  return async (dispatch) => {
    const orderedItems = await services.allOrders();

    dispatch(setOrders(orderedItems));
  };
};

export default ordersSlice.reducer;
