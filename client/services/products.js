import axios from "axios";

const baseUrl = "/api/products";
// process.env.NODE_ENV === "build" ? "/api/products" : "/api/products";

const getProducts = async () => {
  let response = await axios.get(baseUrl);
  // console.log(response);

  // return response.then((result) => result.data);
  return response.data;
};

export default { getProducts };
