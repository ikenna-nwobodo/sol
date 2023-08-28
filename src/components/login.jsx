import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import src from "../images/lg.png";
import leftsrc from "../images/R3_Logo_Dark.png";

const Login = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="login">
      <div className="login-left">
        <img src={leftsrc} alt="logo" height={150} />
      </div>
      <div className="login-right">
        <div className="logo">
          <img src={src} alt="logo" height={80} />
        </div>
        <form className="loginform">
          <div className="form-input">
            <label>Username</label>
            <input />
          </div>
          <div className="form-input">
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="form-button" onClick={navigateHome}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
