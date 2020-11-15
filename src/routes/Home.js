import Axios from "axios";
import React from "react";

const Home = () => {
  const data = { limitCount: 10 };
  const test = async () => {
    const result = await Axios.get(
      "http://localhost:5000/musical/pagelist",
      data
    );
    console.log(result);
  };
  return <button onClick={test}>hi</button>;
};

export default Home;
