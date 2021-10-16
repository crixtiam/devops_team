import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      style={{ marginRight: '20px', padding: '10px 20px' }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
