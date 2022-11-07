import axios from "axios";

const baseUrl = "http://localhost:3001/api/orders";

const allOrders = async () => {
  const token = JSON.parse(window.localStorage.getItem("loggedInUser")).token;
  const config = {
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  const response = await axios.get(baseUrl, config);
  console.log(response);

  return response.data;
};

export default { allOrders };
