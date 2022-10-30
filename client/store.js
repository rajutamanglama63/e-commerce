import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import productDetailReducer from "./reducers/productDetailReducer";
import productReducer from "./reducers/productReducer";
import registerReducer from "./reducers/registerReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    register: registerReducer,
    login: loginReducer,
    productDetail: productDetailReducer,
  },
});

export default store;
