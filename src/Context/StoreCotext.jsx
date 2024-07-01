import { createContext, useEffect, useReducer, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem , setCartItem] = useState({})
    const addTocart = (itemId)=>{
        if(!cartItem[itemId]){
            setCartItem({...cartItem , [itemId] : 1})
        }
        else{   
            setCartItem({...cartItem , [itemId] : cartItem[itemId] + 1})
        }

    }
    const removeFromItem = (itemId)=>{
       setCartItem((prev)=>({...prev,[itemId]: prev[itemId] -1}))
    }
    useEffect(()=>{
        console.log(cartItem)
    },[cartItem])

    const contextValue = {
   food_list,
   cartItem,
   setCartItem,
   addTocart,
   removeFromItem,
    }
// console.log(food_list);
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;