import React from "react";

import { FiDelete } from "react-icons/fi";

const Cart = () => {
  return (
    <div className="wrapper flex block-view">
      <div className="container">
        <div className="flex block-view region-sm">
          <h4 className="h4">Shopping cart</h4>
          <p className="h5">You have 12 item in your cart.</p>
        </div>

        <div className="flex block-view">
          <div className="flex split-pair align-center  region-margin-sm">
            <div className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
                alt="headphone"
              />
            </div>

            <p className="paragraph">hphone</p>
            <p className="paragraph">3 qty</p>
            <p className="paragraph">Rs.200</p>
            <FiDelete className="paragraph btn-del" />
          </div>

          <div className="flex split-pair align-center region-margin-sm">
            <div className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665842926/electronics-shop/d8zym3zogcdexcxptkwt.jpg"
                alt="iphone"
              />
            </div>

            <p className="paragraph gap-2">iphone</p>
            <p className="paragraph gap-2">1 qty</p>
            <p className="paragraph gap-2">Rs.300</p>
            <FiDelete className="paragraph btn-del" />
          </div>

          <ul className="flex split-pair align-center region-margin-sm list-type">
            <li className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665842926/electronics-shop/d8zym3zogcdexcxptkwt.jpg"
                alt="iphone"
              />
            </li>

            <li className="paragraph ">iphone</li>
            <li className="paragraph ">1 qty</li>
            <li className="paragraph ">Rs.300</li>
            <FiDelete className="paragraph btn-del" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
