/**
 * This file defines a context provider for managing the state of a shopping cart and user authentication in a React application.
 * The context allows for global state management, making it easier to share state and functions between components without prop drilling.
 * 
 *useState is a React hook that allows functional components to manage state . It initializes a state variable and provides a function to update that variable, 

 * The useEffect hook is used for performing side effects in functional components. This can include things like data fetching, setting up subscriptions, or manually changing the DOM.

  * Context is used here to:
 * - Provide a centralized store for cart items and user authentication state.
 * - Share these states and related functions across multiple components efficiently.
 * - Avoid the need to pass down props through multiple levels of the component tree.
 */

import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth"; // Importing auth functions from Firebase
import { ToastContainer, toast } from "react-toastify"; // Importing Toast components and functions for notifications
import "react-toastify/dist/ReactToastify.css";

// Creating a context for the store
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({}); // State to keep track of items in the cart
  const [user, setUser] = useState(null); // State to keep track of the authenticated user

  // useEffect to handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set user state when authentication state changes //This cleanup function is called when the component unmounts. Calling unsubscribe ensures that the observer is detached and no longer listens for authentication state changes, preventing potential memory leaks or unwanted updates when the component is not mounted.
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  // Function to add an item to the cart
  const addTocart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem({ ...cartItem, [itemId]: 1 }); // Add item to cart if it doesn't exist
      toast.success(`Food Added in bag.`); // Show success toast
    } else {
      setCartItem({ ...cartItem, [itemId]: cartItem[itemId] + 1 }); // Increase quantity if item already in cart
      toast.info(`Increased Food quantity in bag.`); // Show info toast
    }
  };

  // Function to remove an item from the cart
  const removeFromItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // Decrease quantity of item in cart
    toast.warn(`Removed from the bag.`); // Show warning toast
  };

  // Function to calculate the total cost of items in the cart
  const cartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item); // Find item info from food list
        totalAmount += itemInfo.price * cartItem[item]; // Calculate total cost
      }
    }
    return totalAmount; // Return total amount
  };

  // Context value to be provided
  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addTocart,
    removeFromItem,
    cartTotal,
    user,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginTop: "50px" }}
      />
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
