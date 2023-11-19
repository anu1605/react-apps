import React, { Component } from "react";
import "./App.css";

import Movie from "./components/movie";
import { Redirect, Route, Switch } from "react-router-dom";
import MoviesInfo from "./components/Movies";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import Navbar from "./components/navbar";
import movieForm from "./components/movieForm";
import NotFound from "./components/notFound";

const App = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/movieForm/:id" component={movieForm} {...props}></Route>

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
