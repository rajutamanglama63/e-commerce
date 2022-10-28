import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

import FrontPage from "./FrontPage";
import OrderSummery from "./OrderSummary";
import OrderView from "./OrderView";
import ProductDetail from "./ProductDetail";
import ShippingAddress from "./ShippingAddress.js";
import Signin from "./Signin";
import Signup from "./Signup";

const Router = () => (
  <Routes>
    <Route path="/" element={<FrontPage />} />
    <Route path="/detail" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/shipping" element={<ShippingAddress />} />
    <Route path="/order-summary" element={<OrderSummery />} />
    <Route path="/order" element={<OrderView />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default Router;
