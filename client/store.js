import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import productReducer from "./reducers/productReducer";
import registerReducer from "./reducers/registerReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;
