import axios from "axios";

const basePath = "/api/products";
// process.env.NODE_ENV === "build" ? "/api/products" : "/api/products";

export const getProducts = async () => {
  const allProduct = await axios.get(`${basePath}/all`);
  console.log(allProduct.data);

  return allProduct.data;
};
