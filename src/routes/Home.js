import { actions } from "action/admin";
import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const test = () => {
    dispatch(actions.requestPageList({ pageControl: "end" }));
  };
  return <button onClick={test}>hi</button>;
};

export default Home;
