import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

import FrontPage from "./FrontPage";
import MessageView from "./MessageView";
import ProductDetail from "./ProductDetail";

const Router = () => (
  <Routes>
    <Route path="/" element={<FrontPage />} />
    <Route path="/detail" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/messages" element={<MessageView />} />
  </Routes>
);

export default Router;
