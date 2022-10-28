import axios from "axios";

const baseUrl = "/api/users";

const userSignup = async (userData) => {
  const response = await axios.post(`${baseUrl}/signup`, userData);

  return response.data;
};

export default { userSignup };
