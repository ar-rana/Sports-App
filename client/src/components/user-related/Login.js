import React from "react";

function Login() {
  return (
    <div>
      <div className="container">
        <div className="left">
          <img src="#" alt="App Image" />
          <p className="Tagline">Write about App</p>
        </div>
        <div className="right">
          <h2>New User</h2>
          <p className="already_account">
            Already have an account? <a href="./login.html">Sign in</a>
          </p>
          <form action="#">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="tel" placeholder="Phone" />
            <input type="number" placeholder="Age" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <select>
              <option value disabled selected>
                Select Sport Preference
              </option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
            </select>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
