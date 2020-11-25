import React from "react";
import Login from "./Login";

import axios from "axios";

const Home = () => {
  const test = () => {
    axios.post("http://localhost:5000/musical/data-quick-generate");
  };
  return (
    <>
      <button onClick={test}>hi</button>
      <Login></Login>
    </>
  );
};

export default Home;
