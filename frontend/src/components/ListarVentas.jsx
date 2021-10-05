import { Link } from 'react-router-dom';

const ListarVentas = () => {
  document.title = 'Ventas';

  return (
    <div className='container mt-4'>
      <h3>Interfaz Maestro de Ventas</h3>
      <br />
      <div className='d-flex justify-content-center'>
        <label htmlFor='search'>Buscar Ventas: </label>
        <input
          type='text'
          name='search'
          id='search'
          style={{ width: '500px' }}
          placeholder='Buscar por ID Venta, ID Cliente, o Nombre Cliente'
        />
        <Link to='/nuevaventa'>
          <button>Nueva Venta</button>
        </Link>
      </div>
      <br />
      <hr />
      <div className='d-flex justify-content-center'>
        <table className='mt-4'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Valor Total</th>
              <th>Fecha Venta</th>
              <th>ID Cliente</th>
              <th>Nombre Cliente</th>
              <th>Vendedor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>$532.495</td>
              <td>2021-09-01</td>
              <td>1025896471</td>
              <td>Felipe Camargo</td>
              <td>Diego Valencia</td>
              <td>
                <Link to='/venta/1'>
                  <img
                    src='/edit.svg'
                    width='21'
                    alt='Edit'
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                  />
                </Link>
                {/* <img src='/trash-alt.svg' alt='Delete' width='15' style={{ cursor: 'pointer' }} /> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarVentas;
