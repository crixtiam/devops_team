import '../src/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import ListarVentas from './components/ListarVentas';
import Venta from './components/Venta';
import Usuarios from './components/Usuarios';
import Footer from './components/Footer';
import NuevaVenta from './components/NuevaVenta';
import Productos from './components/Productos';
import Producto from './components/Producto';
import LogIn from './components/LogIn';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className='App'>
      <Router>
        <Navbar />

        {isAuthenticated ? (
          <>
            <Route path='/' exact>
              <ListarVentas />
            </Route>

            <Route path='/productos'>
              <Productos />
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
        ) : (
          <LogIn />
        )}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
