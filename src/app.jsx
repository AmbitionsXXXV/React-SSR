import React, { useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./router";
const App = function () {
  const [counter, setCounter] = useState(100);
  function addCounter() {
    setCounter(counter + 1);
  }
  return (
    <div className="app" style={{ border: "1px solid red" }}>
      <h2>App</h2>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>

      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      {/* 页面的占位 */}
      {useRoutes(routes)}
    </div>
  );
};

export default App;
