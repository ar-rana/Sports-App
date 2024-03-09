import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import "./login.css";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
    try {
      const data = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          res.json();
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  //uncomment this at the end

  // if (!user) {
  //   return <Navigate to="/login"/>;
  // }

  return (
    <div className="container">
      <div className="left-section">
        <div className="logo" />
        <p className="Tagline">Write about App</p>
      </div>
      <div className="right-section">
        <h2>Welcome Back</h2>
        <p className="New_User">
          New User? <a href="/signup">Create an account</a>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="email">
            Email
          </label>
          <br />
          <input
            value={email}
            className="email"
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password" className="password">
            Password
          </label>
          <br />
          <input
            value={password}
            className="password"
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit">Sign In</button>
        </form>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> |<a href="#">Terms and conditions</a> |
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
