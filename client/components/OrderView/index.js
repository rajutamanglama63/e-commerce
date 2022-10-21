import React from "react";
import { FiDelete } from "react-icons/fi";

const OrderView = () => {
  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <h4 className="h6 region-sm">Your order</h4>

        {/* <div className="flex split-pair align-center  region-margin-sm ">
          <div className="cart-img">
            <img
              src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
              alt="headphone"
            />
          </div>

          <p className="paragraph paragraph-sm paragraph-md ">hphone</p>
          <p className="paragraph paragraph-sm paragraph-md">3 qty</p>
          <FiDelete className="paragraph btn-del" />
        </div> */}

        <table className="table">
          <tr>
            <th>Image</th>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
          <tr>
            <td className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
                alt="headphone"
              />
            </td>
            <td>Headphone</td>
            <td>1</td>
            <td>
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>

          <tr>
            <td className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655994/electronics-shop/bdpjpywjvpjqdksjzjwj.jpg"
                alt="dell"
              />
            </td>
            <td>Laptop</td>
            <td>1</td>
            <td>
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>

          <tr>
            <td className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655496/electronics-shop/vfhxxn3awxfynjku3aby.jpg"
                alt="rado"
              />
            </td>
            <td>Watch</td>
            <td>2</td>
            <td>
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default OrderView;
