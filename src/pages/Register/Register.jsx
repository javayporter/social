import React from "react";
import "../Register/register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const heading = "Hello There.";
  const message =
    "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they";
  const sub_message = "Have an acccount already? Awesome! Login now.";
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input placeholder="Username" />
            <input placeholder="Email" />
            <input placeholder="Password" />
            <input placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>{`${heading}`}</h1>
          <p>{`${message}`}</p>
          <span>{`${sub_message}`}</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
