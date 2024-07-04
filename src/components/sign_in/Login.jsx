import React, { useState } from "react";
import "../../components/sign_in/login.css";
import { IoClose } from "react-icons/io5";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
 const  navigat = useNavigate()

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    setError(null); // Clear error when user starts typing
  }

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
        );
        console.log(userCredentials);
        setCurrentState("Login")
        await updateProfile(userCredentials.user, { displayName: data.username });
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setError("This email is already in use.");
        } else {
          setError("An error occurred. Please try again.");
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
        );
        console.log(userCredentials.user.displayName);
        setShowLogin(false)
        navigat("/")
      } catch (err) {
        if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
          setError("Invalid email or password.");
        } else {
          setError("An error occurred. Please try again.");
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
          <IoClose onClick={() => setShowLogin(false)} className="close" aria-label="Close login form" />
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
          {error && <p className="error" aria-live="polite">{error}</p>}
          <button type="submit" disabled={loading} aria-label={currentState === "Sign Up" ? "Create account" : "Login"}>
            {loading ? "Loading..." : (currentState === "Sign Up" ? "Create account" : "Login")}
          </button>
          <div className="login_condition">
            {currentState === "Login" ? (
              <p>
                Create a new account?{" "}
                <span onClick={() => setCurrentState("Sign Up")}>
                  {" "}
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
