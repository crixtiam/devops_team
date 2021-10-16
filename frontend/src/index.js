import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-mgl1kjgk.us.auth0.com'
      clientId='yVnI0affw2H1I0oniDODV0qi6gPJeoGp'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
