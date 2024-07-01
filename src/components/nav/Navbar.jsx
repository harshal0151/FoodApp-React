import React, { useState } from "react";
import "../nav/navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import { CiShoppingBasket, CiSearch , CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";



function Navbar() {

  const [menu , setMenu] = useState("home")

  return (
    <header>
      <div className="logo">
        <img src={assets.logo} alt="" />
      </div>
      <ul>
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>
          <Link to="/">Home</Link>
        </li>
        
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>
          <Link to="/menu">Menu</Link>
        </li>

        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>
          <Link to="/contact">Contact US</Link>
        </li>
      </ul>

      <div className="nav_right">
        <Link >
          <CiSearch className="icon" />
        </Link>
        <div className="cart">
          <Link to= "/cart">
            <CiShoppingBasket className="icon" />
          </Link>
          <div className="dot"></div>
        </div>
        <button className="nav_btn ">
          <CiUser className="icon"/>Sign In</button>
          <FaBars className = "toggle_bar " />
      </div>
    
        
      
    </header>
  );
}

export default Navbar;
