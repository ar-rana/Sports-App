import React from "react";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import "./createaccount.css";
import { UserContext } from "../../UserContext";

const CreateAccount = () => {
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [state, setPlace] = useState("");
  const [sport, setSport] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setAge("");
    setPlace("");
    setSport("");
    console.log(name, email, password, age, state, sport);
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          password,
          state,
          age,
          sport,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (data) {
        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
        setAge(data.age);
        setPlace(data.state);
        setUser(data.user);
        setSport(data.sport);
      }
      if (data.user) {
        setUser(data.user);
        console.log(user)
      }
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
      <div className="left">
        <img src="#" alt="App Image" />
        <p className="Tagline">Write about App</p>
      </div>
      <div className="right">
        <h2>New User</h2>
        <p className="already_account">
          Already have an account? <a href="./login.html">Sign in</a>
        </p>
        <form onSubmit={submithandler}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="State"
          />
          <select id="selPara" onChange={(e) => setSport(e.target.value)}>
            <option value disabled selected>
              Select Sport Preference
            </option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
          </select>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
