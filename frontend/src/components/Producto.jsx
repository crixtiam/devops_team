const Producto = () => {
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
              <td style={{ padding: '5px 20px' }}>541</td>
              <td style={{ padding: '5px 20px' }}>
                <input type='text' value='Pantalón Slim Negro TS' />
              </td>
              <td style={{ padding: '5px 20px' }}>
                <input type='number' value='95000' />
              </td>
              <td style={{ padding: '5px 20px' }}>
                <select>
                  <option value=''></option>
                  <option value='Disponible' selected>
                    Disponible
                  </option>
                  <option value='No Disponible'>No Disponible</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className='d-flex justify-content-center'>
        <button>Guardar</button>
      </div>
    </div>
  );
};

export default Producto;
