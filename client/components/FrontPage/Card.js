import React from "react";

const Card = ({ detailHandler, item }) => {
  return (
    <div className="card-border card-padding">
      <img src={item.imgUrl} alt="watch" />
      <span className="name">{item.productName}</span>
      <div className="price">Rs {item.price}</div>
      <p className="paragraph spec-text">{item.specification}</p>
      <button className="primary-button" onClick={detailHandler}>
        view
      </button>
    </div>
  );
};

export default Card;
