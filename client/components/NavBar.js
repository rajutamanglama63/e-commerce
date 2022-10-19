// import toskaLogo from "../assets/images/toskalogo_color.svg";
import cart from "../assets/images/shopping-cart.png";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

const NavBar = () => (
  <div className="wrapper">
    <div className="flex split-pair align-center region-tn">
      {/* <img src={toskaLogo} alt="toska" className="logo" /> */}
      <div className="logo">eGadgets</div>
      <div className="flex gap-2 align-center">
        <div className="cart-sec">
          <Link to="/#" className="text-link align-center">
            {/* <img src={cart} alt="cart" className="cart" /> */}
            {<GrCart className="cart" />}
          </Link>
          <span className="item-counter">12</span>
        </div>
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="/#" className="text-link">
          user
        </Link>
        <Link to="/#" className="text-link">
          Login
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
