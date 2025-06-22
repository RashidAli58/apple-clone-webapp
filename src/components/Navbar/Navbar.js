import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/applelogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="apple-nav">
        <ul>
          <li>
            <Link to="/HeroSection">
              <span className="apple-logo">
                <img src={logo}></img>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/mac">Mac</Link>
          </li>
          <li>
            <Link to="/IPad">IPad</Link>
          </li>
          <li>
            <Link to="/iPhone">iPhone</Link>
          </li>
          <li>
            <Link to="/watch">Watch</Link>
          </li>
          <li>
            <Link to="/airpods">AirPods</Link>
          </li>
          <li>
            <Link to="/tv-home">TV & Home</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <a href="#">
              <span className="search-icon">🔍</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="cart-icon">🛒</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
