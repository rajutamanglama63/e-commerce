import React from "react";

import { FiDelete } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const orderHandler = () => {
    navigate("/shipping");
  };
  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Shopping cart</h4>
          <p className="one-font-size">You have 12 item in your cart.</p>
        </div>

        <table className="table region-margin-sm">
          <tr>
            <th className="thead">Image</th>
            <th className="thead">Product name</th>
            <th className="thead">Quantity</th>
            <th className="thead">Remove</th>
          </tr>
          <tr>
            <td className="cart-img tdata">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
                alt="headphone"
              />
            </td>
            <td className="tdata">Headphone</td>
            <td className="tdata">1</td>
            <td className="tdata">
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>

          <tr>
            <td className="cart-img tdata">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655994/electronics-shop/bdpjpywjvpjqdksjzjwj.jpg"
                alt="dell"
              />
            </td>
            <td className="tdata">Laptop</td>
            <td className="tdata">1</td>
            <td className="tdata">
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>

          <tr>
            <td className="cart-img tdata">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655496/electronics-shop/vfhxxn3awxfynjku3aby.jpg"
                alt="rado"
              />
            </td>
            <td className="tdata">Watch</td>
            <td className="tdata">2</td>
            <td className="tdata">
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>
        </table>

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
        <button
          onClick={orderHandler}
          className="secondary-button region-margin-sm"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
