import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/Login.css";
import "../components/styles/Register.css";
import loginImg from "../assets/images/formComponentImages/login-img.svg";
import registerImg from "../assets/images/formComponentImages/register-img.svg";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const navigateDashboard = (e: any) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={isLogin ? "container-1" : "container-2"}>
      <div className={isLogin ? "login-container" : "register-container"}>
        <div className={isLogin ? "login-img-container" : "illustration1"}>
          <img
            src={isLogin ? loginImg : registerImg}
            alt="auth-img"
            className={isLogin ? "login-img" : ""}
            style={{ width: isLogin ? "" : "150px" }}
          />
        </div>
        <div
          className={isLogin ? "login-division" : "registration-form-container"}
        >
          <h2 className={isLogin ? "login-heading" : "registration-heading"}>
            {isLogin ? "Login" : "Register"}
          </h2>
          <form
            className={isLogin ? "login-form" : "register-form"}
            onSubmit={isLogin ? navigateDashboard : navigateDashboard}
          >
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className="register-input"
                required
              />
            )}
            <input
              type="email"
              placeholder="E-mail"
              className={isLogin ? "login-input" : "register-input"}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={isLogin ? "login-input" : "register-input"}
              required
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="register-input"
                required
              />
            )}
            <button
              type="submit"
              className={isLogin ? "login-submit" : "register-submit"}
              //   onClick={""}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <p className="login-redirect-content">
            {isLogin ? "Don’t have an account? " : "Already have an account? "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
