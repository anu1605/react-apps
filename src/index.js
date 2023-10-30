import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import App from "./App";
import Movies from "./components/movie";
import "./movies.css";

createRoot(document.getElementById("root")).render(<Movies />);
registerServiceWorker();
