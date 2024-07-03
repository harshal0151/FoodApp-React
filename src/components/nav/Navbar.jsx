import React, { useContext, useState } from "react";
import "../nav/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/scooter.gif"
import { CiShoppingBasket, CiSearch, CiUser } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { StoreContext } from "../../Context/StoreCotext.jsx";


function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartTotal } = useContext(StoreContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
    
     <Link to="/" className="logo">
     <h2>Food.com</h2>
      
        
      </Link>
     
      <ul className={isMobileMenuOpen ? "nav_links mobile_menu" : "nav_links"}>
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>
          <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
        </li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>
          <a href="#contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact US</a>
        </li>
        {/* <button className= "nav_btn_toggle"onClick={() => setShowLogin(true)}>
          <CiUser className="icon" />Sign In
        </button> */}
      </ul>

      <div className= "nav_right">
        <Link>
          <CiSearch className="icon" />
        </Link>
        <div className="cart">
          <Link to="/cart">
            <CiShoppingBasket className="icon" />
          </Link>
          <div className={cartTotal() === 0 ? "" : "dot"}></div>
        </div>
        <button className="nav_btn" onClick={() => setShowLogin(true)}>
          <CiUser className="icon" />Sign In
        </button>
        <div className="toggle_bar" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="" /> : <FaBars className="" />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
