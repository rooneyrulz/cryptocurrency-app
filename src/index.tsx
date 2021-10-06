import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Spinner from "components/layouts/Spinner";
import "antd/dist/antd.css";
import "assets/css/main.css";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
