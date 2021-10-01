import { Link } from 'react-router-dom';

const Productos = () => {
  document.title = 'Productos';

  return (
    <div className='container mt-4'>
      <h3>Módulo Administrador de Productos</h3>
      <div className='d-flex justify-content-center'>
        <form method='post' className='mt-4'>
          <label htmlFor='id'>ID: </label>
          <input type='number' style={{ width: '50px' }} required />
          <label htmlFor='descripcion' style={{ marginLeft: '15px' }}>
            Descripción:{' '}
          </label>
          <input type='text' required />
          <label htmlFor='valor' style={{ marginLeft: '15px' }}>
            Valor Unitario:{' '}
          </label>
          <input type='number' style={{ width: '90px' }} required />
          <label htmlFor='estado' style={{ marginLeft: '15px' }}>
            Estado:{' '}
          </label>
          <select name='estado' id='estado' required>
            <option value=''></option>
            <option value='Disponible'>Disponible</option>
            <option value='No Disponible'>No Disponible</option>
          </select>
          <br />
        </form>
      </div>
      <br />
      <div className='d-flex justify-content-center'>
        <input type='submit' value='Agregar' style={{ marginLeft: '20px' }} />
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
            <tr>
              <td>541</td>
              <td>Pantalón Slim Negro TS</td>
              <td>$95.000</td>
              <td>Disponible</td>
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
            <tr>
              <td>5847</td>
              <td>Bolso Cuero</td>
              <td>$332.495</td>
              <td>Disponible</td>
              <td>
                <img
                  src='/edit.svg'
                  width='21'
                  className='ss-record-icon'
                  alt='Edit'
                  style={{ cursor: 'pointer', marginRight: '10px' }}
                />
                <img src='/trash-alt.svg' alt='Delete' width='15' style={{ cursor: 'pointer' }} />
              </td>
            </tr>
            <tr>
              <td>2984</td>
              <td>Camisa Manga Larga TS</td>
              <td>$105.000</td>
              <td>Disponible</td>
              <td>
                <img
                  src='/edit.svg'
                  width='21'
                  className='ss-record-icon'
                  alt='Edit'
                  style={{ cursor: 'pointer', marginRight: '10px' }}
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

export default Productos;
