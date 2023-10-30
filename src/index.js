import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import App from "./App";
import Movies from "./components/movie";
import "./movies.css";

ReactDOM.render(<Movies />, document.getElementById("root"));
registerServiceWorker();
