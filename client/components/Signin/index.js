import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../reducers/loginReducer";
import Notification from "../Notification";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (loginData.user.firstName) {
      navigate("/");
    }
  }, [loginData]);

  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Login</h4>
          <p className="one-font-size">
            Please fill the following form to login.
          </p>
        </div>
        <Notification />
        <form onSubmit={loginHandler}>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="secondary-button" type="submit">
            Login
          </button>
          <p className="region-margin-tn">
            Not registered yet? <Link to="/signup">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
