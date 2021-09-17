import "../src/styles/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Ventas from "./components/Ventas";
import Footer from "./components/Footer";

function App() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const getVentas = async () => {
      const ventasFromDb = await fetchVentas();
      setVentas(ventasFromDb);
    };
    getVentas();
  }, []);

  const fetchVentas = async () => {
    const res = await fetch("http://localhost:5000/ventas");
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route path="/" exact>
          <Index />
        </Route>

        <Route path="/ventas">
          <Ventas ventas={ventas} />
        </Route>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
