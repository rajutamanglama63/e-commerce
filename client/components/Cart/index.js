import React, { useEffect } from "react";

import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import emptyCart from "../../assets/images/empty_cart.png";

const Cart = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const orderedItems = useSelector((state) => state.orders);
  const orderedItems = useSelector((state) => state.cart);
  const loggedUser = useSelector((state) => state.login);

  // useEffect(() => {
  //   // await dispatch(initOrders());
  //   if (!loggedUser.user.firstName) {
  //     navigate("/");
  //   }
  // }, [loggedUser.user]);

  const orderHandler = () => {
    navigate("/shipping");
  };
  return orderedItems.items && loggedUser.user.firstName ? (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Shopping cart</h4>
          <p className="one-font-size">
            You have {orderedItems.items.products.length} item in your cart.
          </p>
        </div>

        <table className="table region-margin-sm">
          <tr>
            <th className="thead">Image</th>
            <th className="thead">Product name</th>
            <th className="thead">Quantity</th>
            <th className="thead">Remove</th>
          </tr>

          {orderedItems.items.products.length !== 0
            ? orderedItems.items.products.map((item) => (
                <>
                  <tr key={item.price}>
                    <td className="cart-img tdata">
                      <img src={item.imgUrl} alt={item.productName} />
                    </td>
                    <td className="tdata">{item.productName}</td>
                    <td className="tdata">{item.myOrderDetail.quantity}</td>
                    <td className="tdata">
                      <FiDelete className="paragraph btn-del" />
                    </td>
                  </tr>
                </>
              ))
            : null}
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
  ) : (
    <>
      <div className="wrapper flex block-view">
        <div className="container container-sm">
          <img src={emptyCart} alt="empty cart" />
        </div>
      </div>
    </>
  );
};

export default Cart;
