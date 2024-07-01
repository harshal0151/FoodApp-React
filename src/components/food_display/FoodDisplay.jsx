import React, { useContext } from "react";
import "../food_display/food_display.css";
import { StoreContext } from "../../Context/StoreCotext";
import FoodItem from "./FoodItem";
// import { CiBag1 } from "react-icons/ci";

function FoodDisplay({ category }) {
  console.log(category);

  const { food_list } = useContext(StoreContext);
  console.log(food_list);
  return (
    <>
      <div className="food_display" id="food_display">
        {food_list.map((item, index) => {
          if (category ==="All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          }
         
        })}
      </div>
    </>
  );
}

export default FoodDisplay;
