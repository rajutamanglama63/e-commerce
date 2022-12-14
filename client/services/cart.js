import axios from "axios";

const baseUrl = "http://localhost:3001/api/order-detail";

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
  const token =
    window.localStorage.getItem("loggedInUser") !== null
      ? JSON.parse(window.localStorage.getItem("loggedInUser")).token
      : null;
  const config = {
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  const response = await axios.get(baseUrl, config);

  return response.data;
};

export default { addToCart, allCartItems };
