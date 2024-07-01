import { createContext, useEffect, useReducer, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  //cart
  const addTocart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem({ ...cartItem, [itemId]: 1 });
    } else {
      setCartItem({ ...cartItem, [itemId]: cartItem[itemId] + 1 });
    }
  };
  //remove cart by index
  const removeFromItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //cart Total function

  const cartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item] ;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addTocart,
    removeFromItem,
    cartTotal,
  };
  // console.log(food_list);
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
