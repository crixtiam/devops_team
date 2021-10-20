import '../src/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ListarVentas from './components/ListarVentas';
import Venta from './components/Venta';
import Usuarios from './components/Usuarios';
import Footer from './components/Footer';
import NuevaVenta from './components/NuevaVenta';
import Productos from './components/Productos';
import Producto from './components/Producto';
import LogIn from './components/LogIn';
import NoAutorizado from './components/NoAutorizado';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className='App'>
      <Router>
        <Navbar user={user} setUser={setUser} />

        {user?.email &&
        user?.estado === 'Autorizado' &&
        ['Administrador', 'Vendedor'].indexOf(user.rol) > -1 ? (
          <>
            <Route path='/' exact>
              <ListarVentas />
            </Route>

            <Route path='/productos'>
              <Productos user={user} />
            </Route>

            <Route path='/producto/:_id'>
              <Producto />
            </Route>

            <Route path='/listarventas'>
              <ListarVentas />
            </Route>

            <Route path='/venta/:id'>
              <Venta />
            </Route>

            <Route path='/nuevaventa'>
              <NuevaVenta />
            </Route>

            <Route path='/usuarios'>
              <Usuarios />
            </Route>
          </>
        ) : user?.email && user?.estado === 'Autorizado' && user?.rol === 'Usuario' ? (
          <>
            <Route path='/' exact>
              <Productos user={user} />
            </Route>

            <Route path='/productos'>
              <Productos user={user} />
            </Route>
          </>
        ) : user?.email && user?.estado !== 'Autorizado' ? (
          <NoAutorizado />
        ) : (
          <LogIn setUser={setUser} />
        )}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
