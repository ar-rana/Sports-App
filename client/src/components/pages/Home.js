import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login"/>;
  }
  return (
    <div>
      <h2>This is Home Page</h2>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Home;
