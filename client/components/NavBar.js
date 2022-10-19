// import toskaLogo from "../assets/images/toskalogo_color.svg";
import cart from "../assets/images/shopping-cart.png";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="wrapper">
    <div className="flex split-pair align-center region-tn">
      {/* <img src={toskaLogo} alt="toska" className="logo" /> */}
      <h4 className="logo">eGadgets</h4>
      <div className="flex gap-2 align-center">
        <div className="cart-sec">
          <Link to="/#" className="text-link ">
            <img src={cart} alt="cart" className="cart" />
          </Link>
          <span className="item-counter">12</span>
        </div>
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="/#" className="text-link">
          Login
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
