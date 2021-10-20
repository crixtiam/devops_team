import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const Navbar = ({ user, setUser }) => {
  const logout = () => {
    setUser({});
    window.location.replace('/');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between'>
        <div className='navbar-nav'>
          <Link to='/'>
            <img src='/tag.png' alt='Logo' height='40' className='me-3 ms-3 mt-1 mb-1' />
          </Link>

          <Link className='navbar-brand' to='/'>
            Sales COL
          </Link>

          {user?.email &&
            ['Administrador', 'Vendedor'].indexOf(user.rol) > -1 &&
            user?.estado === 'Autorizado' && (
              <>
                <Link className='nav-item nav-link' to='/listarventas'>
                  Ventas
                </Link>

                <Link className='nav-item nav-link' to='/productos'>
                  Productos
                </Link>

                <Link className='nav-item nav-link' to='/usuarios'>
                  Usuarios
                </Link>
              </>
            )}
        </div>
        {user?.email && (
          <div>
            <img
              src={user.imageUrl}
              alt='Profile Pic'
              height='45px'
              style={{ marginRight: '15px' }}
            />
            <span style={{ marginRight: '15px' }}>{user.name}</span>
            <span style={{ marginRight: '15px' }}>
              <GoogleLogout
                clientId='1033523848815-sq6ukknhlfk22kh6osn1nbrt28krj8o2.apps.googleusercontent.com'
                buttonText='Logout'
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </span>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
