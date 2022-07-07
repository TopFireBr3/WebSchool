import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Providers from "./providers/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <Providers>
        <App />
    </Providers>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
