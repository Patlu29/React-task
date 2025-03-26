import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/styles/Login.css";
import "../components/styles/Register.css";
import loginImg from "../assets/images/formComponentImages/login-img.svg";
import registerImg from "../assets/images/formComponentImages/register-img.svg"

const Login = () => {
  return (
    <>
      <div className="container-1">
        <div className="login-container">
          <div className="login-img-container">
            <img src={loginImg} alt="login-img" className="login-img" />
          </div>
          <div className="login-division">
            <h2 className="login-heading">Login</h2>
            <form className="login-form">
              <input
                type="email"
                placeholder="E-mail"
                className="login-input"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                required
              />
              <button type="submit" className="login-submit">
                Login
              </button>
            </form>
            <p className="login-redirect-content">
              Don’t have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Register = () => {
  return (
    <>
      <div className="container-2">
        <div className="register-container">
          <div className="illustration1">
            <img src={registerImg} alt="register-img" style={{width: '150px'}}/>
          </div>
          <div className="registration-form-container">
            <h2 className="registration-heading">Register</h2>
            <form className="register-form">
              <input type="text" placeholder="Username" className="register-input" required/>
              <input type="email" placeholder="E-mail" className="register-input" required/>
              <input type="password" placeholder="Password" className="register-input" required/>
              <input type="password" placeholder="Confirm Password" className="register-input" required/>
              <button type="submit" className="register-submit">Sign Up</button>
            </form>
          </div>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
      </div>
    </>
  );
};

const components = [Login, Register];

export default components;
