import React from "react";

import { FiDelete } from "react-icons/fi";

const Cart = () => {
  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Shopping cart</h4>
          <p className="one-font-size">You have 12 item in your cart.</p>
        </div>

        <div className="flex split-pair align-center  region-margin-sm ">
          <div className="cart-img">
            <img
              src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
              alt="headphone"
            />
          </div>

          <p className="paragraph paragraph-sm paragraph-md ">hphone</p>
          <p className="paragraph paragraph-sm paragraph-md">3 qty</p>
          <p className="paragraph paragraph-sm paragraph-md">Rs.200</p>
          <FiDelete className="paragraph btn-del" />
        </div>

        <div className="flex split-pair align-center region-margin-sm">
          <div className="cart-img">
            <img
              src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665842926/electronics-shop/d8zym3zogcdexcxptkwt.jpg"
              alt="iphone"
            />
          </div>

          <p className="paragraph paragraph-sm paragraph-md">iphone</p>
          <p className="paragraph paragraph-sm paragraph-md">1 qty</p>
          <p className="paragraph paragraph-sm paragraph-md">Rs.300</p>
          <FiDelete className="paragraph btn-del" />
        </div>

        <ul className="flex split-pair align-center region-margin-sm list-type paragraph-sm paragraph-md">
          <li className="cart-img">
            <img
              src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665842926/electronics-shop/d8zym3zogcdexcxptkwt.jpg"
              alt="iphone"
            />
          </li>

          <li className="paragraph paragraph-sm paragraph-md">iphone</li>
          <li className="paragraph paragraph-sm paragraph-md">1 qty</li>
          <li className="paragraph paragraph-sm paragraph-md">Rs.300</li>
          <FiDelete className="paragraph btn-del" />
        </ul>

        <div className="border-line sub-total">
          <div className="flex split-pair">
            <span className="one-font-size">Subtotal:</span>
            <span className="one-font-size">Rs.800</span>
          </div>
          <div className="flex split-pair">
            <span className="one-font-size">Shipping fee:</span>
            <span className="one-font-size">Rs.10</span>
          </div>
          <hr />
          <div className="flex split-pair">
            <span className="one-font-size">Total:</span>
            <span className="one-font-size">Rs.810</span>
          </div>
        </div>
        <button className="secondary-button region-margin-sm">Order</button>
      </div>
    </div>
  );
};

export default Cart;
