import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const registerData = useSelector((state) => state.register);
  // console.log(registerData.msg);

  const [message, setMessage] = useState(null);
  let msgStyle = "";

  useEffect(() => {
    setMessage(registerData.msg);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [registerData]);

  // if (message === null) {
  //   return null;
  // }

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
