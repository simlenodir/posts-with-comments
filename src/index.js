import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { App } from "./App";
import { ThemeProvider } from "./contexs/theme";
import { LangContextProvider } from "./contexs/lang";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
