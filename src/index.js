import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RegisterInfoProvider } from "./contexts/RegisterInfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RegisterInfoProvider>
      <App />
    </RegisterInfoProvider>
  </React.StrictMode>
);
