import React, { useEffect } from "react";

import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItems } from "../../reducers/cartReducer";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart);
  const loggedUser = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(cartItems());
  }, [dispatch]);

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

        {loggedUser.user.id === itemsInCart.items.idUser
          ? itemsInCart.items.map((item) => (
              <>
                <table className="table region-margin-sm">
                  <tr>
                    <th className="thead">Image</th>
                    <th className="thead">Product name</th>
                    <th className="thead">Quantity</th>
                    <th className="thead">Remove</th>
                  </tr>
                  <tr>
                    <td className="cart-img tdata">
                      <img src={item.imgUrl} alt="headphone" />
                    </td>
                    <td className="tdata">{item.productName}</td>
                    <td className="tdata">{item.quantity}</td>
                    <td className="tdata">
                      <FiDelete className="paragraph btn-del" />
                    </td>
                  </tr>
                </table>
              </>
            ))
          : null}

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
