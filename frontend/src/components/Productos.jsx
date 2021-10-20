import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { User } from '@auth0/auth0-spa-js';

const Productos = ({ user }) => {
  document.title = 'Productos';

  // Dar formato al valor con $ al principio y separado por .
  function formatoMoneda(num) {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get('http://localhost:3001/productos');
      setProductos(res.data);
    };
    getProductos();
  }, []);

  const [descripcion, setDescripcion] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [estado, setEstado] = useState('');

  const addProducto = async (e) => {
    e.preventDefault();
    const producto = await axios.post('http://localhost:3001/productos', {
      descripcion,
      valorUnitario,
      estado,
    });
    setDescripcion('');
    setValorUnitario('');
    setEstado('');
    setProductos([...productos, producto.data]); // siempre se usa .data con la info que viene de axios
  };

  const deleteProducto = async (_id) => {
    const confirm = window.confirm('Esta seguro de borrar el producto?');
    if (confirm === true) {
      await axios.delete(`http://localhost:3001/productos/${_id}`);
      setProductos(productos.filter((producto) => producto?._id !== _id));
    }
  };

  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-center'>
        <h3 className='subtitle'>Productos</h3>
      </div>
      {user?.email &&
        ['Administrador', 'Vendedor'].indexOf(user.rol) > -1 &&
        user?.estado === 'Autorizado' && (
          <>
            <div className='d-flex justify-content-center'>
              <form className='mt-4' onSubmit={addProducto}>
                <label htmlFor='descripcion' style={{ marginLeft: '15px' }}>
                  Descripción:{' '}
                </label>
                <input
                  type='text'
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                />
                <label htmlFor='valor' style={{ marginLeft: '15px' }}>
                  Valor Unitario:{' '}
                </label>
                <input
                  type='number'
                  style={{ width: '90px' }}
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                  required
                />
                <label htmlFor='estado' style={{ marginLeft: '15px' }}>
                  Estado:{' '}
                </label>
                <select
                  name='estado'
                  id='estado'
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  required
                >
                  <option value=''></option>
                  <option value='Disponible'>Disponible</option>
                  <option value='No Disponible'>No Disponible</option>
                </select>
                <br />
                <br />
                <div className='d-flex justify-content-center'>
                  <input type='submit' value='Agregar' />
                </div>
              </form>
            </div>
            <br />
            <hr />
          </>
        )}
      <div className='d-flex justify-content-center'>
        <table className='mt-4'>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Valor Unitario</th>
              <th>Estado</th>
              {user?.email &&
                ['Administrador', 'Vendedor'].indexOf(user.rol) > -1 &&
                user?.estado === 'Autorizado' && <th>Opciones</th>}
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto._id}>
                <td>{producto.descripcion}</td>
                <td>{formatoMoneda(producto.valorUnitario)}</td>
                <td>{producto.estado}</td>
                {user?.email &&
                  ['Administrador', 'Vendedor'].indexOf(user.rol) > -1 &&
                  user?.estado === 'Autorizado' && (
                    <td>
                      <Link
                        to={{
                          pathname: `/producto/${producto._id}`,
                          state: {
                            _id: producto._id,
                            descripcion: producto.descripcion,
                            valorUnitario: producto.valorUnitario,
                            estado: producto.estado,
                          },
                        }}
                      >
                        <img
                          src='/edit.svg'
                          width='21'
                          className='ss-record-icon'
                          alt='Edit'
                          style={{ cursor: 'pointer', marginRight: '10px' }}
                        />
                      </Link>
                      <img
                        src='/trash-alt.svg'
                        alt='Delete'
                        width='15'
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteProducto(producto._id)}
                      />
                    </td>
                  )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {user?.email && user?.rol === 'Usuario' && user?.estado === 'Autorizado' && (
        <>
          <br />
          <div
            className='d-flex justify-content-center subtitle'
            style={{ textDecoration: 'underline' }}
          >
            Señor usuario, contacte a un representante de ventas para hacer su pedido
          </div>
        </>
      )}
    </div>
  );
};

export default Productos;
