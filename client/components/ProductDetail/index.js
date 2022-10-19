import React from "react";

const ProductDetail = () => {
  return (
    <div className="wrapper region-md">
      <div className="container flex split-pair">
        <div className="img-side">
          <div className="product-img">
            <img
              src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655994/electronics-shop/bdpjpywjvpjqdksjzjwj.jpg"
              alt="laptop"
            />
          </div>
        </div>
        <div className="detailer-side region-side-left-md">
          <p className="p-title">Dell inspiron</p>
          <p className="price">
            Price: <span>Rs 320</span>
          </p>
          <p className="spec region-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
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
