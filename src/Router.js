import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "routes/Admin";
import Home from "routes/Home";
import Login from "routes/Login";
import SearchResult from "components/home/SearchResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/admin" component={Admin}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/test" component={SearchResult}></Route>
    </BrowserRouter>
  );
};

export default Router;
