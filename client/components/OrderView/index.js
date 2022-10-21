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
          <tr className="table-row">
            <th className="paragraph paragraph-sm paragraph-md">Image</th>
            <th className="paragraph paragraph-sm paragraph-md">
              Product name
            </th>
            <th className="paragraph paragraph-sm paragraph-md">Quantity</th>
            <th className="paragraph paragraph-sm paragraph-md">Remove</th>
          </tr>
          <tr className="table-row">
            <td className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
                alt="headphone"
              />
            </td>
            <td className="paragraph paragraph-sm paragraph-md">Headphone</td>
            <td className="paragraph paragraph-sm paragraph-md">1</td>
            <td>
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>

          <tr className="table-row">
            <td className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655994/electronics-shop/bdpjpywjvpjqdksjzjwj.jpg"
                alt="dell"
              />
            </td>
            <td className="paragraph paragraph-sm paragraph-md">Laptop</td>
            <td className="paragraph paragraph-sm paragraph-md">1</td>
            <td>
              <FiDelete className="paragraph btn-del" />
            </td>
          </tr>

          <tr className="table-row">
            <td className="cart-img">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655496/electronics-shop/vfhxxn3awxfynjku3aby.jpg"
                alt="rado"
              />
            </td>
            <td className="paragraph paragraph-sm paragraph-md">Watch</td>
            <td className="paragraph paragraph-sm paragraph-md">2</td>
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
