import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Auth0Provider
    domain="dev-o4oau070lcbfht7w.us.auth0.com"
    clientId="NXCmRS59dXIGMXqJ59jcHr8JUCM6yXNw"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
