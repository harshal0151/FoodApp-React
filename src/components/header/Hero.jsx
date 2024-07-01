import React from "react";
import "../header/hero.css"

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_content">
          <h1>
            Order your favourite food here!
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolore, temporibus?
          </p>
          <button className="btn">Let's Order</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
