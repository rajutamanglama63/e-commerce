import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const individualProduct = useSelector((state) => state.productDetail);
  // console.log(individualProduct);

  const [qty, setQty] = useState(0);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    setQty(qty - 1);
  };
  return !individualProduct ? (
    <>Loading</>
  ) : (
    <div className="wrapper region-md">
      <div className="container flex split-pair flow-direction">
        {/* <div className="img-side"> */}
        <div className="portion-img product-img">
          <img
            src={individualProduct.imgUrl}
            alt={individualProduct.productName}
          />
        </div>
        {/* </div> */}
        <div className="portion-spec region-side-md mob-view">
          <p className="p-title">{individualProduct.productName}</p>
          <p className="price">
            Price: <span>Rs {individualProduct.price}</span>
          </p>
          <p className="spec region-sm">{individualProduct.specification}</p>
          <p className="avialiablity">
            Avialiable:{" "}
            {individualProduct.quantity >= 1 ? (
              <span className="stock">In stock</span>
            ) : (
              <span className="stock">Out of stock</span>
            )}
          </p>
          {/* <p className="avialiablity">
            Catagory:{" "}
            <span className="stock">
              {individualProduct.catagory.catagory_name}
            </span>
          </p> */}
          <hr />
          <div className="region-tn">
            <button className="btn-counter" onClick={increase}>
              +
            </button>
            <span className="region-side-tn">{qty}</span>
            <button className="btn-counter" onClick={decrease}>
              -
            </button>
          </div>
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
