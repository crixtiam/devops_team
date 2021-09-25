import '../src/styles/style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Ventas from './components/Ventas';
import Estado from './components/Estado';
import Vendedores from './components/Vendedores';
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

        <Footer />
      </Router>
    </div>
  );
}

export default App;
