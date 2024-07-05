import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCotext";
import Ratting from "../../assets/ratting.png";
import "./../singlei_tem/single_page.css";
import ai from "../../assets/ai.png"


function SinglePage() {
  const { id } = useParams();
  const { food_list, addTocart, _id } = useContext(StoreContext);

  const food = food_list.find((item) => item._id === id);
  console.log(food);


  useEffect(()=>{
      window.scroll(0,0)
  },[])
  return (
    <>
      <div className="single_food">
        <div className="single_food_left">
          <img src={food?.image} alt={food.name} />
        </div>

        <div className="single_food_right">
          <h1>{food.name}</h1>
          <p>{food.category}</p>
          <div className="single_food_ratting">
            <img src={Ratting} alt="ratting" />
            <span>{food.rating}</span>
          </div>
          <p>{food.description2}</p>
          <div className="rate">
            <h3>Price:</h3> <span>Rs {food.price * 8}</span>
          </div>
          <button
            onClick={() => addTocart(food._id)}
            className="single_food_btn"
          >
            Add to bag
          </button>
        </div>
      </div>

      <div className="single_bottom">

        <div className="recipe">
          <h2>Recipe</h2>
          <p>{food.home_recipe}</p>
        </div>

        <div className="ingredients">
          <h2>Food Ingredients</h2>
          <ul>
            {food.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>

        <div className="ai_home">
        <div className="title">
          <h3>Get A Smart Recipe Suggestions</h3>
        </div>
        <p>
          Experience personalized recipe suggestions tailored to your
          preferences with our AI-powered recipe generator. Simply input a food
          category or dish, and receive detailed, healthy recipe ideas complete
          with ingredients, step-by-step instructions, and calorie counts per
          serving. Explore nutritious meal options effortlessly!
        </p>
        <Link to="/foodAi">
        <button className="AIbtn">Food AI <img src={ai} alt="" /></button>
        </Link>
      </div>
      </div>
      
   
    </>
  );
}

export default SinglePage;
