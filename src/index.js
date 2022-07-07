import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginProvider } from "./providers/loginContext";
import Providers from "./providers/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>    
    <BrowserRouter>
      <Providers>
        <LoginProvider>
          <App />
        </LoginProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
