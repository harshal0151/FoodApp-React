import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCotext";
import Ratting from "../../assets/ratting.png";
import "./../singlei_tem/single_page.css";

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
      </div>
    </>
  );
}

export default SinglePage;
