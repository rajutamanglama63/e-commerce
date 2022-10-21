import React from "react";

const OrderSummery = () => {
  return (
    <div className="wrapper region-md">
      <div className="container container-sm flex split-pair flow-direction flow-direction-tn">
        <div>
          <h5 className="h5">Shipping</h5>

          <div className="region-tn flex split-pair block-view height">
            <p className="paragraph">
              Name: <span className="paragraph">Jaru Mala</span>
            </p>
            <p className="paragraph">
              Email: <span className="paragraph">example@gmail.com</span>
            </p>
            <p className="paragraph">
              Address:{" "}
              <span className="paragraph">Nepal, Kathmandu, Lazimpat</span>
            </p>
          </div>
        </div>

        <div className="border-line sub-total">
          <h5 className="one-font-size">Order Summary</h5>
          <div className="flex split-pair">
            <span className="one-font-size">Subtotal:</span>
            <span className="one-font-size">Rs.810</span>
          </div>
          <div className="flex split-pair">
            <span className="one-font-size">Tax:</span>
            <span className="one-font-size">Rs.10</span>
          </div>
          <hr />
          <div className="flex split-pair">
            <span className="one-font-size">Total:</span>
            <span className="one-font-size">Rs.820</span>
          </div>
          <button className="checkout-btn region-margin-tn">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
