import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import registerReducer from "./reducers/registerReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    register: registerReducer,
  },
});

export default store;
