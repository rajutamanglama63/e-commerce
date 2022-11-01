import axios from "axios";

const baseUrl = "/api/cart";

const addToCart = async (item) => {
  const token = JSON.parse(window.localStorage.getItem("loggedInUser")).token;
  const config = {
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  const response = await axios.post(baseUrl, item, config);

  return response.data;
};

const allCartItems = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};

export default { addToCart, allCartItems };
