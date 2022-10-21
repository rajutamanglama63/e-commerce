import React from "react";
import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {
  const navigate = useNavigate();

  const summaryHandler = () => {
    navigate("/order-summary");
  };
  return (
    <div className="wrapper region-md">
      <div className="container container">
        <h4 className="h6 region-tn">Shipping address</h4>
        <form onSubmit={summaryHandler}>
          <input
            className="input-field border-line region-margin-tn paragraph"
            type="text"
            placeholder="Country"
          />
          <input
            className="input-field border-line region-margin-tn paragraph"
            type="text"
            placeholder="City"
          />
          <input
            className="input-field border-line region-margin-tn paragraph"
            type="text"
            placeholder="Place"
          />
          <button type="submit" className="btn">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddress;
