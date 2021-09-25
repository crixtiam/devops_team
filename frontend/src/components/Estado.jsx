const Estado = () => {
  document.title = 'Estado';

  function currencyFormat(num) {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <div className='container mt-4'>
      <h3>Módulo para registrar el estado de la venta</h3>
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
              <th>Estado</th>
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
                <select name='estado' id='estado' required>
                  <option value=''></option>
                  <option value='Creación'>Creación</option>
                  <option value='Embalaje'>Embalaje</option>
                  <option value='Despacho'>Despacho</option>
                  <option value='Ruta'>Ruta</option>
                  <option value='Ubicación'>Ubicación</option>
                  <option value='Recepción'>Recepción</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estado;
