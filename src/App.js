import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";
import Movie from "./components/movie";
import MoviesInfo from "./components/Movies";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import Navbar from "./components/navbar";
import movieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import Register from "./components/register";

const App = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/loginForm" component={LoginForm} {...props}></Route>
          <Route path="/register" component={Register} {...props}></Route>
          <Route path="/Movies/:id" component={movieForm} {...props}></Route>
          <Route path="/Movies" component={MoviesInfo}></Route>
          <Route path="/Customers" component={Customers}></Route>
          <Route path="/Rentals" component={Rentals}></Route>
          <Route path="/movie" component={Movie}></Route>
          <Redirect from="/" exact to="/movie"></Redirect>
          <Route path="/notFound" component={NotFound}></Route>
          <Redirect to="/notFound"></Redirect>
        </Switch>
      </div>
    </div>
  );
};

export default App;
