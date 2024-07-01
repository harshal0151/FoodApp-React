import React, { useState } from "react";
import Hero from "../../components/header/Hero";
import "../../components/header/hero.css";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/food_display/FoodDisplay";
import Noodle from "../../assets/noodle.gif"

function Home() {
  const [category , setCategory] = useState("All");

  return (
    <>
    <div id="home">
    <Hero />
    </div>

      <div className="section " >
        <div className="title">
          <h3>What's on your mind?</h3>
        </div>
        <ExploreMenu category = {category} setCategory= {setCategory}/>
      </div>
      <hr />

      <div className="section">
      <div className="title">
          <h3>Top dishes near you</h3>
          <img src= {Noodle} alt="" />
        </div>
        <FoodDisplay category={category}/>
      </div>

   
    </>
  );
}

export default Home;
