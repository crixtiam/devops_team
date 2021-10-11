import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Productos = () => {
  document.title = 'Productos';

  const [productos, setProductos] = useState([]);

  const [descripcion, setDescripcion] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [estado, setEstado] = useState('');

  const addProducto = async () => {
    const producto = await axios.post('http://localhost:3001/productos', {
      descripcion,
      valorUnitario,
      estado,
    });
    setDescripcion('');
    setValorUnitario('');
    setEstado('');
    setProductos([{ ...productos, producto }]);
  };

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get('http://localhost:3001/productos');
      setProductos(res.data);
    };
    getProductos();
  }, []);

  return (
    <div className='container mt-4'>
      <h3>Módulo Administrador de Productos</h3>
      <div className='d-flex justify-content-center'>
        <form method='post' className='mt-4'>
          <label htmlFor='descripcion' style={{ marginLeft: '15px' }}>
            Descripción:{' '}
          </label>
          <input type='text' onChange={(e) => setDescripcion(e.target.value)} required />
          <label htmlFor='valor' style={{ marginLeft: '15px' }}>
            Valor Unitario:{' '}
          </label>
          <input
            type='number'
            style={{ width: '90px' }}
            onChange={(e) => setValorUnitario(e.target.value)}
            required
          />
          <label htmlFor='estado' style={{ marginLeft: '15px' }}>
            Estado:{' '}
          </label>
          <select name='estado' id='estado' onChange={(e) => setEstado(e.target.value)} required>
            <option value=''></option>
            <option value='Disponible'>Disponible</option>
            <option value='No Disponible'>No Disponible</option>
          </select>
          <br />
        </form>
      </div>
      <br />
      <div className='d-flex justify-content-center'>
        <input
          type='submit'
          value='Agregar'
          style={{ marginLeft: '20px' }}
          onClick={() => addProducto()}
        />
      </div>
      <hr />
      <div className='d-flex justify-content-center'>
        <table className='mt-4'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descripción</th>
              <th>Valor Unitario</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto._id}>
                <td style={{ paddingRight: '40px' }}>{producto._id}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.valorUnitario}</td>
                <td>{producto.estado}</td>
                <td>
                  <Link to='/producto/1'>
                    <img
                      src='/edit.svg'
                      width='21'
                      className='ss-record-icon'
                      alt='Edit'
                      style={{ cursor: 'pointer', marginRight: '10px' }}
                    />
                  </Link>
                  <img src='/trash-alt.svg' alt='Delete' width='15' style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Productos;
