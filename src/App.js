import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";

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
import Logout from "./components/logout";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <ToastContainer />
        <Navbar user={user} />
        <div className="container">
          <Switch>
            <Route
              path="/loginForm"
              component={LoginForm}
              {...this.props}
            ></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route
              path="/register"
              component={Register}
              {...this.props}
            ></Route>
            <ProtectedRoute path="/Movies/:id" component={movieForm} />
            {/* <Route
              path="/Movies/:id"
              render={(props) => {
                if (!user) return <Redirect to="/loginForm" />;
                return <movieForm {...props} />;
              }}
              {...this.props}
            ></Route> */}
            <Route path="/Movies" component={MoviesInfo}></Route>
            <Route path="/Customers" component={Customers}></Route>
            <Route path="/Rentals" component={Rentals}></Route>
            <Route
              path="/movie"
              render={(props) => <Movie {...props} user={user} />}
            ></Route>

            <Redirect from="/" exact to="/movie"></Redirect>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect to="/notFound"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
