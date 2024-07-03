import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCotext";
import "../placeOrder/place_order.css";
import route from "../../assets/route.gif"

function OrderConfirmation() {
  const location = useLocation();
  const { formData, cartTotal } = location.state;
  const {cartItem , food_list}  = useContext(StoreContext)

  const food = food_list.find((item) => item._id === cartItem._id);
  console.log(food);

  return (<>
    <h2>Order Confirmation</h2>
    <div className="confirmation_container">
     
      <div className="order_details">
        <h3>Delivery Information</h3>
        <p> Name: {formData.firstName + "" + formData.lastName}</p>
        <p>Address: {formData.street + " " + formData.city}</p>

        <div className="payment_details">
        <h3> Payment</h3>
        <p>Total : ₹ {cartTotal * 8 + 20}/-</p>
      </div>
      </div>
      
      <div className="soon">
      <h3>Your order will be delivered soon!</h3>
      <img src={route} alt="" />
      </div>
    </div>
    </>
  );

}

export default OrderConfirmation;
