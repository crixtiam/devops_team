import { useState } from 'react';

const Vendedores = ({ vendedores }) => {
  document.title = 'Vendedores';

  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [celular, setCelular] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');

  const addVendedor = async (event) => {
    event.preventDefault();
    await fetch('http://localhost:5000/vendedores', {
      method: 'POST',
      body: JSON.stringify({
        nombre,
        especialidad,
        celular,
        fechaIngreso,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.reload(false);
  };

  const deleteVendedor = async (id) => {
    await fetch(`http://localhost:5000/vendedores/${id}`, { method: 'DELETE' });
    window.location.reload(false);
  };

  return (
    <div className='container mt-4'>
      <h3>Gestión de Vendedores</h3>
      <div className='d-flex justify-content-center'>
        <form method='post' className='mt-4' onSubmit={addVendedor}>
          <label htmlFor='nombre'>Nombre: </label>
          <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <label htmlFor='especialidad'>Especialidad: </label>
          <input
            type='text'
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            required
          />
          <label htmlFor='celular'>Celular: </label>
          <input
            type='number'
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
          <label htmlFor='fechaIngreso'>Fecha Ingreso: </label>
          <input
            type='date'
            name='fechaIngreso'
            id='fechaIngreso'
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            required
          />
          <input type='submit' value='Agregar' style={{ marginLeft: '20px' }} />
          <br />
          <br />
          <hr />
        </form>
      </div>
      <div className='d-flex justify-content-center'>
        <table className='mt-4'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Celular</th>
              <th>Fecha Ingreso</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {vendedores.map((vendedor) => (
              <tr>
                <td>{vendedor.id}</td>
                <td>{vendedor.nombre}</td>
                <td>{vendedor.especialidad}</td>
                <td>{vendedor.celular}</td>
                <td>{vendedor.fechaIngreso}</td>
                <td>
                  <img
                    src='/edit.svg'
                    width='21'
                    className='ss-record-icon'
                    alt='Edit'
                    style={{ marginRight: '10px' }}
                  />
                  <img
                    src='/trash-alt.svg'
                    alt='Delete'
                    width='15'
                    onClick={() => deleteVendedor(vendedor.id)}
                    style={{ cursor: 'pointer' }}
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

export default Vendedores;
