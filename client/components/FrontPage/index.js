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
        <p className="paragraph spec-text">
          specification, feature, discription and it's uniqueness, bla bla bla
          bla
        </p>
        <button className="primary-button">view</button>
      </div>
      <div className="card-border card-padding">
        <img
          src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655496/electronics-shop/vfhxxn3awxfynjku3aby.jpg"
          alt="watch"
        />
        <span className="name">Rado</span>
        <div className="price">Rs 200</div>
        <div className="paragraph spec-text">
          specification, feature, discription and it's uniqueness
        </div>
        <button className="primary-button">view</button>
      </div>
      <div className="card-border card-padding">
        <img
          src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665655994/electronics-shop/bdpjpywjvpjqdksjzjwj.jpg"
          alt="laptop"
        />
        <span className="name">Dell</span>
        <div className="price">Rs 290</div>
        <div className="paragraph spec-text">
          Generate Lorem Ipsum placeholder text for use in your graphic, print
          and web layouts, and discover plugins for your favorite writing
        </div>
        <button className="primary-button">view</button>
      </div>

      <div className="card-border card-padding">
        <img
          src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665656613/electronics-shop/fd96kdzvrxi22eijhg0n.jpg"
          alt="headphone"
        />
        <span className="name">Headphone</span>
        <div className="price">Rs 140</div>
        <div className="paragraph spec-text">
          Generate Lorem Ipsum placeholder text for use in your graphic, print
          and web layouts, and discover plugins for your favorite writing
        </div>
        <button className="primary-button">view</button>
      </div>

      <div className="card-border card-padding">
        <img
          src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1665660242/electronics-shop/ty6q0jycnhldozlagjfq.jpg"
          alt="earbud"
        />
        <span className="name">Earbuds</span>
        <div className="price">Rs 100</div>
        <div className="paragraph spec-text">
          Generate Lorem Ipsum placeholder text for use in your graphic, print
          and web layouts, and discover plugins for your favorite writing
        </div>
        <button className="primary-button">view</button>
      </div>
    </div>
  </div>
);

export default FrontPage;
