import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();

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

          {isAuthenticated && user['http://localhost/roles'] == 'Administrador' && (
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

        {isAuthenticated && (
          <div>
            <img src={user.picture} height='50px' style={{ marginRight: '20px' }} />
            <span style={{ marginRight: '20px' }}>
              {user.name} ({user['http://localhost/roles']})
            </span>
            <LogoutButton />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
