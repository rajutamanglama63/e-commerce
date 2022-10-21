import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

import FrontPage from "./FrontPage";
import MessageView from "./MessageView";
import ProductDetail from "./ProductDetail";
import ShippingAddress from "./ShippingAddress.js";

const Router = () => (
  <Routes>
    <Route path="/" element={<FrontPage />} />
    <Route path="/detail" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/shipping" element={<ShippingAddress />} />
    <Route path="/messages" element={<MessageView />} />
  </Routes>
);

export default Router;
