// 1. install react-router
import React from "react";
import ReactDOM from "react-dom/client";
// 2. import BrowserRouter
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 3. connect the App to the browser's URL
  <HashRouter>
    <App />
  </HashRouter>
);
