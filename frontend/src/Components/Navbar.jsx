import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img
            src="/tag.png"
            alt="Logo"
            height="40"
            className="me-3 ms-3 mt-1 mb-1"
          />
        </Link>
        <Link class="navbar-brand" to="/">
          Sales COL
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/ventas">
              Ventas
            </Link>
            <Link class="nav-item nav-link" to="#">
              Estado
            </Link>
            <Link class="nav-item nav-link" to="#">
              Vendedores
            </Link>
            <Link class="nav-item nav-link" to="#">
              Usuarios
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
