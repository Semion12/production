import React from "react";
import { createRoot } from "react-dom/client";
import "./components/styles/index.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "../theme/themeProvider";

const root = createRoot(document.querySelector(".root") as HTMLElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
