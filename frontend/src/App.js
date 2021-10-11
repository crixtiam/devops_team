import '../src/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Route path='/' exact>
          <LogIn />
        </Route>

        <Route path='/productos'>
          <Productos />
        </Route>

        <Route path='/producto/:id'>
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

        <Footer />
      </Router>
    </div>
  );
}

export default App;
