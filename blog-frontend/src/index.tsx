import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { getConfig } from "./config";

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  useRefreshTokens: true,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
