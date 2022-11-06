import axios from "axios";

const baseUrl = "/api/orders";

const allOrders = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};

export default { allOrders };
