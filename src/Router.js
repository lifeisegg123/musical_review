import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "routes/Admin";
import Home from "routes/Home";
import Login from "routes/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/admin" component={Admin}></Route>
      <Route exact path="/login" component={Login}></Route>
    </BrowserRouter>
  );
};

export default Router;
