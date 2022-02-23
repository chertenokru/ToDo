import ReactDom from "react-dom";
import { App } from "./App";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
