import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initOrders } from "../../reducers/orderReducer";

import { initializeProducts } from "../../reducers/productReducer";
import Card from "./Card";

const FrontPage = () => {
  const productItems = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
    dispatch(initOrders());
  }, [dispatch]);
  return (
    // <div className="wrapper region-md flow-md">
    //   <h3 className="h3 hero-title text-center">
    //     Welcome to boilerplate messages app
    //   </h3>
    //   <div className="flex split-center">
    //     <Link to="/messages" className="primary-button">
    //       VIEW MESSAGES
    //     </Link>
    //   </div>
    // </div>

    <div className="wrapper region-md">
      <div className="grid grid-4up">
        {productItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FrontPage;
