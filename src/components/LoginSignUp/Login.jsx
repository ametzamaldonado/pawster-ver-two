import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.scss";
import logo from "../../img/white-red.png";

const Login = () => {
  const { login } = useAuth();
  const [err, setError] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await login(email, password);
      navigate("/home"); // changed from "/"
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        setError("Wrong password. Please try again");
      } else if (errorCode === "auth/user-not-found") {
        setError(
          `Can't find email: ${email} in our database. Please make sure you are using the correct email.`
        );
      } else {
        setError("Failed to log in");
      }
    }
  };
  return (
    <div className="wholePage-container">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">
            <a href="/"> {/* changed from "/home" */}
              <img src={logo} alt="logo" />
            </a>
          </span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Email" />{" "}

            <label>Password</label>
            <input type="password" placeholder="Password.." />
            <button>Sign in</button>
            {err && <span>Something went wrong - {err}</span>}
          </form>
          <p>
            You don't have an account?
            <Link to="/register">
              {" "}
              <button className="no_buttonStyling">Register</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
