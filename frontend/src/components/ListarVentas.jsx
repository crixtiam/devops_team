import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListarVentas = () => {
  document.title = 'Ventas';

  const [ventas, setVentas] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getVentas = async () => {
      const res = await axios.get('http://localhost:3001/ventas');
      setVentas(res.data);
    };
    getVentas();
  }, []);

  const deleteVenta = async (_id) => {
    const res = window.confirm('Está seguro de eliminar esta venta?');
    if (res === true) {
      await axios.delete(`http://localhost:3001/ventas/${_id}`);
      setVentas(ventas.filter((venta) => venta._id !== _id));
    }
  };

  // Dar formato al valor con $ al principio y separado por .
  function formatoMoneda(num) {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-center'>
        <h3 className='subtitle'>Ventas</h3>
      </div>
      <br />
      <div className='d-flex justify-content-center'>
        <label htmlFor='search'>Buscar Ventas: </label>
        <input
          type='text'
          name='search'
          id='search'
          style={{ width: '500px' }}
          placeholder='Buscar por cualquiera de los parámetros...'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <Link to='/nuevaventa'>
          <button style={{ marginLeft: '20px' }}>Nueva Venta</button>
        </Link>
      </div>
      <br />
      <hr />
      <div className='d-flex justify-content-center'>
        <table className='mt-4'>
          <thead>
            <tr>
              <th>Valor Total</th>
              <th>Fecha Venta</th>
              <th>ID Cliente</th>
              <th>Nombre Cliente</th>
              <th>Vendedor</th>
            </tr>
          </thead>
          <tbody>
            {ventas
              .filter((venta) => {
                if (searchTerm === '') {
                  return venta;
                } else if (
                  venta.valorTotal.toString().indexOf(searchTerm) > -1 ||
                  venta.fecha.toString().indexOf(searchTerm) > -1 ||
                  venta.idCliente.toString().indexOf(searchTerm) > -1 ||
                  venta.nombreCliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  venta.encargado.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return venta;
                }
                return false;
              })
              .map((venta) => (
                <tr key={venta._id}>
                  <td>{venta.valorTotal && formatoMoneda(venta.valorTotal)}</td>
                  <td>{venta.fecha}</td>
                  <td>{venta.idCliente}</td>
                  <td>{venta.nombreCliente}</td>
                  <td>{venta.encargado}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/venta/${venta._id}`,
                        state: { venta: venta },
                      }}
                    >
                      <img
                        src='/edit.svg'
                        width='21'
                        alt='Edit'
                        style={{ cursor: 'pointer', marginRight: '10px' }}
                      />
                    </Link>
                    <img
                      src='/trash-alt.svg'
                      alt='Delete'
                      width='15'
                      style={{ cursor: 'pointer' }}
                      onClick={() => deleteVenta(venta._id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarVentas;
