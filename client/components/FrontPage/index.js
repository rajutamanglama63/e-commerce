import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => (
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
      <div className="card-border card-padding">
        <img
          src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655496/electronics-shop/vfhxxn3awxfynjku3aby.jpg"
          alt="watch"
        />
        <span className="name">Siko 5</span>
        <div className="price">Rs 170</div>
        <div>specification, feature, discription and it's uniqueness</div>
        <Link to="/#">view</Link>
      </div>
      <div className="card-border card-padding">
        <img
          src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655496/electronics-shop/vfhxxn3awxfynjku3aby.jpg"
          alt="watch"
        />
        <span className="name">Rado</span>
        <div className="price">Rs 200</div>
        <div>specification, feature</div>
        <Link to="/#">view</Link>
      </div>
      <div>cards</div>
      <div>cards</div>
      <div>cards</div>
    </div>
  </div>
);

export default FrontPage;
