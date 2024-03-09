import React from "react";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>This is Home Page</h2>
    </div>
  );
}

export default Home;
