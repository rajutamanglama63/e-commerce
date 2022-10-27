import axios from "axios";

const basePath =
  process.env.NODE_ENV === "build"
    ? "api/products"
    : "http://localhost:3001/api/products";

export const getProducts = async () => {
  const allProducts = await axios.get(basePath);

  return allProducts.data;
};
