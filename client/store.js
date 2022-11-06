import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import loginReducer from "./reducers/loginReducer";
import orderReducer from "./reducers/orderReducer";
import productDetailReducer from "./reducers/productDetailReducer";
import productReducer from "./reducers/productReducer";
import registerReducer from "./reducers/registerReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    register: registerReducer,
    login: loginReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});

export default store;
