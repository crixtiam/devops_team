const Venta = () => {
  return (
    <div className='container mt-4'>
      <h3>Interfaz Info de Venta Específica</h3>
      <br />
      <div className='d-flex justify-content-center'>
        <table className='red-border'>
          <tbody>
            <tr>
              <th className='red-border sm-padding'>ID Venta</th>
              <td className='red-border'>1</td>
              <th className='red-border sm-padding'>Fecha</th>
              <td className='red-border'>
                <input type='date' value='2021-09-01' />
              </td>
            </tr>
            <tr>
              <th className='red-border sm-padding'>Encargado</th>
              <td className='red-border'>
                <select name='encargado' id='encargado'>
                  <option value=''></option>
                  <option value='William'>William</option>
                  <option value='Diego Valencia' selected>
                    Diego Valencia
                  </option>
                  <option value='Cristian'>Cristian</option>
                </select>
              </td>
              <th className='red-border sm-padding'>Estado</th>
              <td className='red-border'>
                <select>
                  <option value=''></option>
                  <option value='En Proceso'>En Proceso</option>
                  <option value='Entregada' selected>
                    Entregada
                  </option>
                  <option value='Cancelada'>Cancelada</option>
                </select>
              </td>
            </tr>
            <tr>
              <th className='red-border sm-padding'>ID Cliente</th>
              <td className='red-border'>
                <input type='number' value='1025896471' />
              </td>
              <th className='red-border sm-padding'>Nombre Cliente</th>
              <td className='red-border'>
                <input type='text' value='Felipe Camargo' />
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
                <input type='number' value='541' />
              </td>
              <td className='red-border text-center'>
                <input type='text' value='Pantalón Slim Negro TS' />
              </td>
              <td className='red-border text-center'>
                <input type='number' value='1' />
              </td>
              <td className='red-border text-center'>
                <input type='number' value='95000' />
              </td>
            </tr>
            <tr>
              <td className='red-border text-center'>
                <input type='number' value='5847' />
              </td>
              <td className='red-border text-center'>
                <input type='text' value='Bolso Cuero' />
              </td>
              <td className='red-border text-center'>
                <input type='number' value='1' />
              </td>
              <td className='red-border text-center'>
                <input type='number' value='332495' />
              </td>
            </tr>
            <tr>
              <td className='red-border text-center'>
                <input type='number' value='2984' />
              </td>
              <td className='red-border text-center'>
                <input type='text' value='Camisa Manga Larga TS' />
              </td>
              <td className='red-border text-center'>
                <input type='number' value='1' />
              </td>
              <td className='red-border text-center'>
                <input type='number' value='105000' />
              </td>
            </tr>
            <tr>
              <td colSpan='2'></td>
              <td className='subtitle' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {' '}
                Total:
              </td>
              <td className='red-border text-center'>$532.495</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      <div className='d-flex justify-content-center'>
        <button>Editar</button>
      </div>
    </div>
  );
};

export default Venta;
