import React from "react";
import "./login.css";

function Login() {
  return (
    <div>
      <div className="container">
        <div className="left-section">
          <div className="logo" />
          <p className="Tagline">Write about App</p>
        </div>
        <div className="right-section">
          <h2>Welcome Back</h2>
          <p className="New_User">
            New User? <a href="./createaccount.html">Create an account</a>
          </p>
          <form action="#">
            <label htmlFor="email" className="email">
              Email
            </label>
            <br />
            <input
              className="email"
              type="email"
              placeholder="Enter your Email"
            />
            <br />
            <label htmlFor="password" className="password">
              Password
            </label>
            <br />
            <input
              className="password"
              type="password"
              placeholder="Enter your Password"
            />
            <br />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit">Sign In</button>
          </form>
          <div className="footer-links">
            <a href="#">Privacy Policy</a> |<a href="#">Terms and conditions</a>{" "}
            |<a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
