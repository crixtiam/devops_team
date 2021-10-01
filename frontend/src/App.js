import '../src/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Ventas from './components/Ventas';
import Estado from './components/Estado';
import Vendedores from './components/Vendedores';
import Usuarios from './components/Usuarios';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Route path='/' exact>
          <Index />
        </Route>

        <Route path='/ventas'>
          <Ventas />
        </Route>

        <Route path='/estado'>
          <Estado />
        </Route>

        <Route path='/vendedores'>
          <Vendedores />
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
