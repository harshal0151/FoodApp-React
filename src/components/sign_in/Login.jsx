import React, { useState } from "react";
import "../../components/sign_in/login.css"; 
import { IoClose } from "react-icons/io5"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; // Importing Firebase authentication functions
import { auth } from "../../firebase"; // Importing Firebase authentication instance
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation

function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login"); // State to track whether the form is for login or sign up
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  }); // State to store form input data
  
  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(false); // State to track loading state

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle input changes and clear errors when user starts typing
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    setError(null); // Clear error when user starts typing
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state

    if (currentState === "Sign Up") {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        ); // Create a new user with email and password
        console.log(userCredentials);
        setCurrentState("Login"); // Switch to login state after successful sign up
        await updateProfile(userCredentials.user, { displayName: data.username }); // Update the user's profile with the username
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setError("This email is already in use."); // Set error if email is already in use
        } else {
          setError("An error occurred. Please try again."); // Set generic error message
        }
      } finally {
        setLoading(false); // Clear loading state
      }
    } else {
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        ); // Sign in with email and password
        console.log(userCredentials.user.displayName);
        setShowLogin(false); // Close login form on successful login
        navigate("/"); // Navigate to the home page
      } catch (err) {
        if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
          setError("Invalid email or password."); // Set error if email or password is incorrect
        } else {
          setError("An error occurred. Please try again."); // Set generic error message
        }
      } finally {
        setLoading(false); // Clear loading state
      }
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login_container">
        <div className="login_title">
          <h2>{currentState}</h2>
          <IoClose onClick={() => setShowLogin(false)} className="close" aria-label="Close login form" /> {/* Close login form */}
        </div>
        <div className="login_input">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Enter your name... "
              name="username"
              value={data.username}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            placeholder="Enter email... "
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Enter password... "
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          {error && <p className="error" aria-live="polite">{error}</p>} {/* Display error messages */}
          <button type="submit" disabled={loading} aria-label={currentState === "Sign Up" ? "Create account" : "Login"}>
            {loading ? "Loading..." : (currentState === "Sign Up" ? "Create account" : "Login")}
          </button>
          <div className="login_condition">
            {currentState === "Login" ? (
              <p>
                Create a new account?{" "}
                <span onClick={() => setCurrentState("Sign Up")}>
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrentState("Login")}>
                  Login here
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
