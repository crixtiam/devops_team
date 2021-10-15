import { useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

const Producto = () => {
  const data = useLocation();
  const _id = data?.state?._id;
  const [descripcion, setDescripcion] = useState(data?.state?.descripcion);
  const [valorUnitario, setValorUnitario] = useState(data?.state?.valorUnitario);
  const [estado, setEstado] = useState(data?.state?.estado);

  const updateProducto = async () => {
    await axios.put(`http://localhost:3001/productos/${_id}`, {
      descripcion: descripcion,
      valorUnitario: valorUnitario,
      estado: estado,
    });
    window.history.back();
  };

  return (
    <div className='container mt-4'>
      <h3>Interfaz Info de Producto Específico</h3>
      <div className='d-flex justify-content-center'>
        <table className='mt-4'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descripción</th>
              <th>Valor Unitario</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '5px 20px' }}>{_id}</td>
              <td style={{ padding: '5px 20px' }}>
                <input
                  type='text'
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </td>
              <td style={{ padding: '5px 20px' }}>
                <input
                  type='number'
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                />
              </td>
              <td style={{ padding: '5px 20px' }}>
                <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                  <option value='Disponible'>Disponible</option>
                  <option value='No Disponible'>No Disponible</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className='d-flex justify-content-center'>
        <Link to='/productos'>
          <button style={{ marginRight: '20px' }}>Cancelar</button>
        </Link>
        <button onClick={updateProducto}>Guardar</button>
      </div>
    </div>
  );
};

export default Producto;
