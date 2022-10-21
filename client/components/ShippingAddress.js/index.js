import React from "react";

const ShippingAddress = () => {
  return (
    <div className="wrapper region-md">
      <div className="container container">
        <h4 className="h6 region-tn">Shipping address</h4>
        <form>
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
        </form>
        <button className="btn">Continue</button>
      </div>
    </div>
  );
};

export default ShippingAddress;
