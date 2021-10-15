import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const NuevaVenta = () => {

  const [idVenta,setIdVenta] = useState("");
  const [encargado,setEncargado] = useState("");
  const [idCliente,setIdCliente] = useState("");
  const [fecha,setFecha] = useState("");
  const [estado,setEstado] = useState("");
  const [nombreCliente,setNombreCliente] = useState("");
  const [productos,setProductos] = useState([]);
  
  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get('http://localhost:3001/productos');
      setProductos(res.data);
    };
    getProductos();
  }, []);
  console.log(productos);


  return (
    <div className='container mt-4'>
      <h3>Interfaz Nueva Venta</h3>
      <br />
      <div className='d-flex justify-content-center'>
        <form>
        <table className='red-border'>
          <tbody>
            <tr>
              <th className='red-border sm-padding'>ID Venta</th>
              <td className='red-border'>
                <input type='number' name='idVenta' id='idVenta' onChange={(e)=>setIdVenta(e.target.value)} />
              </td>
              <th className='red-border sm-padding'>Fecha</th>
              <td className='red-border'>
                <input type='date' name='fechaVenta' id='fechaVenta' onChange={(e)=>setFecha(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <th className='red-border sm-padding'>Encargado</th>
              <td className='red-border'>
                <select name='encargado' id='encargado' onChange={(e)=> setEncargado(e.target.value)}>
                  <option value=''></option>
                  <option value='William'>William</option>
                  <option value='Diego Valencia'>Diego Valencia</option>
                  <option value='Cristian'>Cristian</option>
                </select>
              </td>
              <th className='red-border sm-padding'>Estado</th>
              <td className='red-border'>
                <select onChange={(e)=>setEstado(e.target.value)}>
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
                <input type='number' name='idCliente' id='idCliente' onChange={(e)=>setIdCliente(e.target.value)}/>
              </td>
              <th className='red-border sm-padding'>Nombre Cliente</th>
              <td className='red-border'>
                <input type='text' name='nombreCliente' id='nombreCliente' onChange={(e)=>setNombreCliente(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <th className='th-venta red-border text-center'>Producto</th>
              <th className='th-venta red-border text-center'>Precio Unitario</th>
              <th className='th-venta red-border text-center'>Cantidad</th>
            
            </tr>
            <tr>            
              <td className='red-border text-center'>
                
                <select>
                  <option value=""/>
            
            
             {           

              productos.map((producto)=>(
                  <option value={producto._id}>{producto.descripcion}</option>   
             
              ))  
              }
            </select>
                
                </td>
                <td className='red-border text-center'></td>
  
              </tr>


            <tr>
              <td className='subtitle' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {' '}
                Total:
              </td>
              <td className='red-border text-center'>(Valor Total)</td>
            </tr>
          </tbody>
        </table>
      <br />
      <div className='d-flex justify-content-center'>
        <button>Agregar</button>
      </div>

        </form>

      </div>
    </div>
  );
};

export default NuevaVenta;
