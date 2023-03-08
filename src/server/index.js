const express = require("express");
import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../store/index";
import App from "../app.jsx";
const server = express();

// 静态资源的部署
server.use(express.static("build"));

server.get("/*", (req, res) => {
  // 就是服务器端渲染:  /   /about
  const AppHtmlString = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>React18 + SSR</h1>
      <div id="root">${AppHtmlString}</div>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
  `);
});

server.listen(8080, () => {
  console.log("server start on 8080");
});
