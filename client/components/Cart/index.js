import React from "react";

const Cart = () => {
  return (
    <div className="wrapper flex block-view">
      <div className="flex block-view region-sm">
        <h4 className="h4">Shopping cart</h4>
        <p className="h5">You have 12 item in your cart.</p>
      </div>
      <div className="flex split-pair align-center cart-item-block border-line">
        <div className="cart-img">
          <img
            src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
            alt="headphone"
          />
        </div>

        <p className="paragraph">headphone</p>
        <p className="paragraph">3 qty</p>
        <p className="paragraph">Rs.200</p>
        <p className="paragraph">remove</p>
      </div>
    </div>
  );
};

export default Cart;
