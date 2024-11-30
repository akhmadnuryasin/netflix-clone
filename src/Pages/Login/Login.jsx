import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import "./Login.css";

const Login = () => {
  const [SignState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img className="login-logo" src={logo} alt="" />
      <div className="login-form">
        <h1>{SignState}</h1>
        <form>
          {SignState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{SignState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {SignState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign in</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
