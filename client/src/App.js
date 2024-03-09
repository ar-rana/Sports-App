import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/user-related/Login";
import CreateAccount from "./components/user-related/CreateAccount";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState("");

  // in createaccount css uncomment line 60 on completion

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
