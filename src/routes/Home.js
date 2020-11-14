import Axios from "axios";
import React from "react";

const Home = () => {
  const test = async () => {
    const result = await Axios.post(
      "http://localhost:5000/musical/data-quick-generate"
    );
  };
  return <button onClick={test}>hi</button>;
};

export default Home;
