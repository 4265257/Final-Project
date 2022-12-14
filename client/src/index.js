import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react"

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
    audience="BackEndFinalProject"
    scope="read:current_user update:current_user_metadata"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

