import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react"
//import './index.css';
//import reportWebVitals from './reportWebVitals';

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
    //audience="https://dev-qsmcygd4.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);


/* ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
