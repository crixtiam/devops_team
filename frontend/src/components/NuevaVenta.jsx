const NuevaVenta = () => {
  return (
    <div className='container mt-4'>
      <h3>Interfaz Nueva Venta</h3>
      <br />
      <div className='d-flex justify-content-center'>
        <table className='red-border'>
          <tbody>
            <tr>
              <th className='red-border sm-padding'>ID Venta</th>
              <td className='red-border'>
                <input type='number' name='idVenta' id='idVenta' />
              </td>
              <th className='red-border sm-padding'>Fecha</th>
              <td className='red-border'>
                <input type='date' name='fechaVenta' id='fechaVenta' />
              </td>
            </tr>
            <tr>
              <th className='red-border sm-padding'>Encargado</th>
              <td className='red-border'>
                <select name='encargado' id='encargado'>
                  <option value=''></option>
                  <option value='William'>William</option>
                  <option value='Diego Valencia'>Diego Valencia</option>
                  <option value='Cristian'>Cristian</option>
                </select>
              </td>
              <th className='red-border sm-padding'>Estado</th>
              <td className='red-border'>
                <select>
                  <option value=''></option>
                  <option value='En Proceso'>En Proceso</option>
                  <option value='Entregada'>Entregada</option>
                  <option value='Cancelada'>Cancelada</option>
                </select>
              </td>
            </tr>
            <tr>
              <th className='red-border sm-padding'>ID Cliente</th>
              <td className='red-border'>
                <input type='number' name='idCliente' id='idCliente' />
              </td>
              <th className='red-border sm-padding'>Nombre Cliente</th>
              <td className='red-border'>
                <input type='text' name='nombreCliente' id='nombreCliente' />
              </td>
            </tr>
            <tr>
              <th className='th-venta red-border text-center'>ID</th>
              <th className='th-venta red-border text-center'>Descripción</th>
              <th className='th-venta red-border text-center'>Cantidad</th>
              <th className='th-venta red-border text-center'>Precio Unitario</th>
            </tr>
            <tr>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
              <td className='red-border text-center'>
                <input type='text' />
              </td>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
              <td className='red-border text-center'>
                <input type='text' />
              </td>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
              <td className='red-border text-center'>
                <input type='text' />
              </td>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
              <td className='red-border text-center'>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td colSpan='2'></td>
              <td className='subtitle' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {' '}
                Total:
              </td>
              <td className='red-border text-center'>(Valor Total)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className='d-flex justify-content-center'>
        <button>Agregar</button>
      </div>
    </div>
  );
};

export default NuevaVenta;
