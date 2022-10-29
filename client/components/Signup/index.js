import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRegistration } from "../../reducers/registerReducer";
import Notification from "../Notification";

const Signup = () => {
  const dispatch = useDispatch();
  // const registerData = useSelector((state) => state.register);
  // const [message, setMessage] = useState(null);
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(userRegistration(newUserData));

    setNewUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  // useEffect(() => {
  //   setMessage(registerData.msg);
  //   setTimeout(() => {
  //     setMessage(null);
  //   }, 5000);
  // }, [registerData]);

  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Register</h4>
          <p className="one-font-size">Please registered yourself.</p>
        </div>
        {/* {message ? (
          <>
            <p>{message}</p>
          </>
        ) : null} */}
        <Notification />
        <form onSubmit={registerHandler}>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="First Name"
            value={newUserData.firstName}
            onChange={(e) =>
              setNewUserData({ ...newUserData, firstName: e.target.value })
            }
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Last Name"
            value={newUserData.lastName}
            onChange={(e) =>
              setNewUserData({ ...newUserData, lastName: e.target.value })
            }
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Email"
            value={newUserData.email}
            onChange={(e) =>
              setNewUserData({ ...newUserData, email: e.target.value })
            }
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Password"
            value={newUserData.password}
            onChange={(e) =>
              setNewUserData({ ...newUserData, password: e.target.value })
            }
          />
          <button className="secondary-button" type="submit">
            Signup
          </button>
          <p className="region-margin-tn">
            Aready registered? <Link to="/signin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
