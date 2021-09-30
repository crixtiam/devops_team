const Vendedores = () => {
  document.title = 'Vendedores';

  return (
    <div className='container mt-4'>
      <h3>Gestión de Vendedores</h3>
      <div className='d-flex justify-content-center'>
        <form method='post' className='mt-4'>
          <label htmlFor='nombre'>Nombre: </label>
          <input type='text' required />
          <label htmlFor='especialidad'>Especialidad: </label>
          <input type='text' required />
          <label htmlFor='celular'>Celular: </label>
          <input type='number' required />
          <label htmlFor='fechaIngreso'>Fecha Ingreso: </label>
          <input type='date' name='fechaIngreso' id='fechaIngreso' required />
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
            <tr>
              <td>1</td>
              <td>Felipe</td>
              <td>Ropa</td>
              <td>3105874698</td>
              <td>2021-09-01</td>
              <td>
                <img
                  src='/edit.svg'
                  width='21'
                  className='ss-record-icon'
                  alt='Edit'
                  style={{ marginRight: '10px' }}
                />
                <img src='/trash-alt.svg' alt='Delete' width='15' style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vendedores;
