import { Route, Routes } from "react-router";

import "./components/styles/index.scss";
import { MainAsyncPage } from "./components/page/mainPage/mainAsyncPage";
import { AboutAsyncPage } from "./components/page/aboutPage/aboutAsyncPage";
import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "../theme/themeContext";
import { UseTheme } from "../theme/useTheme";
import { classNames } from "../helpers/className/classnames";


export const App = () => {
  const {theme, toggleTheme} = UseTheme()
  return (
    <div className={classNames('app', {"hovered":true}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={"/main"}>main</Link>
      <Link to={"/about"}>about</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/main" element={<MainAsyncPage />} />
          <Route path="/about" element={<AboutAsyncPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
