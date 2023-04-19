import React from "react";
import "../Login/login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const heading = "Hello There.";
  const message =
    "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they";
  const sub_message = "Dont have an account? Register today!";
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>{`${heading}`}</h1>
          <p>{`Welcome, ${message}`}</p>
          <span>{`${sub_message}`}</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input placeholder="Username" />
            <input placeholder="Password" />

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
