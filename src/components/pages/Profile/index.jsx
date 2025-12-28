import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { user, isLoading, isAuthenticated, logout } = useAuth0(); //fetch user data and auth status from Auth0

  if (isLoading || !isAuthenticated || !user) {
    return <div className='text-center p-4'>Loading...</div>;// if the user data is still loading, show a loading message
  }

  const email = user.email || '';
  const name = user.name || email || 'User';

  const initials =
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('') || 'U';

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-white px-6 py-16 font-serif">
      <div className="w-full max-w-md bg-white rounded-md shadow-lg border border-gray-200 px-10 py-10 text-center">
        {/* avatar */}
        {user.picture ? (
          <img
            src={user.picture}
            alt={name}
            className="mx-auto w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="mx-auto w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center">
            <span className="text-white text-2xl">{initials}</span>
          </div>
        )}

        {/* main line (bold email like screenshot) */}
        <h1 className="mt-6 text-2xl font-semibold text-gray-900 break-words">
          {email}
        </h1>

        {/* smaller line under */}
        <p className="mt-2 text-sm text-gray-600 break-words">
          {email}
        </p>

        {/* logout button */}
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md shadow-sm hover:opacity-90"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
