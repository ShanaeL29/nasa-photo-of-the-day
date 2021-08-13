import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme"; //same as theme/index

//taking the component/App and inserting it into the root
//App.js is the first component that is going to mount/render

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector("#root") //this root is coming from the index.html file
);
