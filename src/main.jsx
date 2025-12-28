import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProvideAppContext } from './context/AppContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';



/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Wrap ProvideAppContext with the Auth Provider from Auth0
 * - Add your credentials from Auth0 to a .env file (AUTH_DOMAIN, AUTH_CLIENT_ID)
 * - Set the domain, clientId, and authorizationParams
 */
createRoot(document.getElementById('root')).render(
    <ProvideAppContext>
      <Auth0Provider 
        domain={"http://localhost:5173/"}
        clientId={"6DU1zc7rexZNgfIiMyr2QISD5eQq407C"}
        authorizationParams={{redirect_uri: window.location.origin}}
      >
        <App />
      </Auth0Provider>
    </ProvideAppContext>
);
