import React, { useState } from "react";
import "../../components/sign_in/login.css";
import { assets } from "../../assets/assets";
import { IoClose } from "react-icons/io5"

function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  console.log(currentState);
  return (
    <div className="login">
      <form className="login_container">
        <div className="login_title">
          <h2>{currentState}</h2>
          <IoClose onClick={() => setShowLogin(false)} className="close" />

        </div>
        <div className="login_input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your name... " required />
          )}

          <input type="email" placeholder="Enter email... " required />
          <input type="password" placeholder="Enter password... " required />
          <button>
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login_condition">
          {currentState === "Login" ? (
            <p>
              Create a new account? <span onClick={()=>setCurrentState("Sign Up")}> Click here</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={()=> setCurrentState("Login")}>Login here</span>
            </p>
          )}
          </div>
         
        </div>
      </form>
    </div>
  );
}

export default Login;
