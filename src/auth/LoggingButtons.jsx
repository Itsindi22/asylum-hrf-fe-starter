import { useAuth0 } from "@auth0/auth0-react";
/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
function LoggingButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  const handleLogging = () => {
    if (isAuthenticated) {
      // TODO: Add Logout functionality here:
      logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      });
    } else {
      // TODO: Add Redirect functionality here:
      loginWithRedirect();
    }
  };

  return (
    <button onClick={handleLogging}>
      {buttonText}
    </button>
  );
}

export default LoggingButton;
