// import toskaLogo from "../assets/images/toskalogo_color.svg";
import cart from "../assets/images/shopping-cart.png";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

const NavBar = () => (
  <div className="wrapper">
    <div className="flex split-pair align-center region-tn flow-direction-tn">
      {/* <img src={toskaLogo} alt="toska" className="logo" /> */}
      <div className="logo">eGadgets</div>
      <div className="flex gap-2 align-center">
        <div className="cart-sec">
          <Link to="/cart" className="text-link align-center font-sm">
            {/* <img src={cart} alt="cart" className="cart" /> */}
            {<GrCart className="cart" />}
          </Link>
          <span className="item-counter font-sm">12</span>
        </div>
        <Link to="/" className="text-link font-sm">
          Guest
        </Link>
        <Link to="/#" className="text-link font-sm">
          Shop
        </Link>
        <Link to="/#" className="text-link font-sm">
          Login
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
