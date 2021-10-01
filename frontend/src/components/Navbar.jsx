import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/'>
          <img src='/tag.png' alt='Logo' height='40' className='me-3 ms-3 mt-1 mb-1' />
        </Link>
        <Link className='navbar-brand' to='/'>
          Sales COL
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-item nav-link' to='/listarventas'>
              Ventas
            </Link>
            <Link className='nav-item nav-link' to='/productos'>
              Productos
            </Link>
            <Link className='nav-item nav-link' to='/vendedores'>
              Vendedores
            </Link>
            <Link className='nav-item nav-link' to='#'>
              Usuarios
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
