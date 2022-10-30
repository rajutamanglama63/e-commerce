import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const individualProduct = useSelector((state) => state.productDetail);
  console.log(individualProduct);
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
            Avialiable: <span className="stock">In stock</span>{" "}
          </p>
          <hr />
          <div className="region-tn">
            <button className="btn-counter">+</button>
            <span className="region-side-tn">1</span>
            <button className="btn-counter">-</button>
          </div>
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
