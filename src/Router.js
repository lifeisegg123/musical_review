import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "routes/Admin";
import Home from "routes/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/admin" component={Admin}></Route>
    </BrowserRouter>
  );
};

export default Router;
