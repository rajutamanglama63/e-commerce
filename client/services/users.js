import axios from "axios";

const baseUrl = "http://localhost:3001/api/users";

const userSignup = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);

    return response.data;

    // console.log(response);
  } catch (error) {
    return error.response.data.msg;
  }

  // response
  //   .then((result) => result.data)
  //   .catch((err) => console.log(err.response.data.msg));
};

const userSignin = async (userCredentials) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, userCredentials);

    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

export default { userSignup, userSignin };
