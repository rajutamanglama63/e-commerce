import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initProductDetail } from "../../reducers/productDetailReducer";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailHandler = (id) => {
    dispatch(initProductDetail(id));
    navigate(`/detail/${id}`);
  };
  return (
    <div className="card-border card-padding">
      <img src={item.imgUrl} alt="watch" />
      <span className="name">{item.productName}</span>
      <div className="price">Rs {item.price}</div>
      <p className="paragraph spec-text">{item.specification}</p>
      <button className="primary-button" onClick={() => detailHandler(item.id)}>
        view
      </button>
    </div>
  );
};

export default Card;
