import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const registerData = useSelector((state) => state.register);
  const loginData = useSelector((state) => state.login);

  const [message, setMessage] = useState(null);
  // console.log(message);
  let msgStyle = "";

  useEffect(() => {
    setMessage(registerData.msg);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [registerData]);

  useEffect(() => {
    setMessage(loginData.msg);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [loginData]);

  if (
    message === "User logged in successfully." ||
    message === "Successfully deleted."
  ) {
    msgStyle = "green";
  } else if (
    message === "Invalid Credentials" ||
    message === "User doesn't exit!" ||
    message === "jwt must be provided" ||
    message === "Your password is too weak." ||
    message === "User already exists." ||
    message === "All fields are required!" ||
    message === "User already exists."
  ) {
    msgStyle = "red";
  }

  return (
    <div>
      {message ? (
        <>
          <p className={msgStyle}>{message}</p>
        </>
      ) : null}
    </div>
  );
};

export default Notification;
