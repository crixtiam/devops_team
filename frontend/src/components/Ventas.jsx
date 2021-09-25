const Ventas = () => {
  document.title = 'Ventas';

  return (
    <div className='container mt-4'>
      <h3>Módulo Administrador de Ventas</h3>
      <div className='d-flex justify-content-center'>
        <form method='post' className='mt-4'>
          <label htmlFor='valor'>Valor: </label>
          <input type='number' style={{ width: '90px' }} required />
          <label htmlFor='descripcion'>Descripción: </label>
          <input type='text' required />
          <label htmlFor='fechaInicial'>Fecha Inicial: </label>
          <input
            type='date'
            name='fechaInicial'
            id='fechaInicial'
            style={{ width: '145px' }}
            required
          />
          <label htmlFor='fechaPago'>Fecha Pago: </label>
          <input type='date' name='fechaPago' id='fechaPago' style={{ width: '145px' }} required />
          <label htmlFor='responsable'>Responsable: </label>
          <select name='responsable' id='responsable' required>
            <option value=''></option>
            <option value='Felipe'>Felipe</option>
            <option value='Camilo'>Camilo</option>
          </select>

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
              <th>Valor</th>
              <th>Descripción</th>
              <th>Fecha Inicial</th>
              <th>Fecha Pago</th>
              <th>Responsable</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>$50.000</td>
              <td>Pantalón</td>
              <td>2021-09-01</td>
              <td>2021-09-15</td>
              <td>Felipe</td>
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

export default Ventas;
