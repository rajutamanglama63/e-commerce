import { Routes, Route } from "react-router-dom";

import FrontPage from "./FrontPage";
import MessageView from "./MessageView";
import ProductDetail from "./ProductDetail";

const Router = () => (
  <Routes>
    <Route path="/" element={<FrontPage />} />
    <Route path="/detail" element={<ProductDetail />} />
    <Route path="/messages" element={<MessageView />} />
  </Routes>
);

export default Router;
