import React from "react";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
