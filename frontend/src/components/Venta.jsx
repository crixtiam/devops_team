import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Venta = () => {
  const location = useLocation();
  const venta = location.state.venta;

  const [encargado, setEncargado] = useState(venta.encargado);
  const [idCliente, setIdCliente] = useState(venta.idCliente);
  const [fecha, setFecha] = useState(venta.fecha);
  const [estadoVenta, setEstadoVenta] = useState(venta.estadoVenta);
  const [nombreCliente, setNombreCliente] = useState(venta.nombreCliente);
  var listaVenta = venta.productosVenta;
  const [cantidad, setCantidad] = useState();

  const enviarVenta = async (e) => {
    e.preventDefault();
    const nuevaVenta = {
      encargado: encargado,
      idCliente: idCliente,
      fecha: fecha,
      estadoVenta: estadoVenta,
      nombreCliente: nombreCliente,
      productosVenta: listaVenta,
      valorTotal: listaVenta.reduce(
        (sum, current) => sum + current.valorUnitario * current.cantidad,
        0
      ),
      _id: venta._id,
    };
    await axios.put(
      `https://devops-api-dccj.herokuapp.com/ventas/${nuevaVenta._id}`,
      nuevaVenta
    );
    window.history.back();
  };

  // Dar formato al valor con $ al principio y separado por .
  function formatoMoneda(num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  const handleCantidadChange = (_id, cantidad) => {
    const producto = listaVenta.find((producto) => producto._id === _id);
    const index = listaVenta.indexOf(producto);
    producto.cantidad = cantidad;
    listaVenta[index] = { ...producto, cantidad: parseInt(cantidad) };
  };

  return (
    <div className="container mt-4">
      <h3>Interfaz Info de Venta Específica</h3>
      <br />
      <div className="d-flex justify-content-center">
        <form onSubmit={enviarVenta}>
          <table className="red-border">
            <tbody>
              <tr>
                <th colSpan="2" className="th-venta red-border sm-padding">
                  Venta
                </th>
                <th className="red-border sm-padding">Fecha</th>
                <td className="red-border">
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th className="red-border sm-padding">Encargado</th>
                <td className="red-border">
                  <select
                    name="encargado"
                    id="encargado"
                    value={encargado}
                    onChange={(e) => setEncargado(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="William">William</option>
                    <option value="Diego Valencia">Diego Valencia</option>
                    <option value="Cristian">Cristian</option>
                  </select>
                </td>
                <th className="red-border sm-padding">Estado</th>
                <td className="red-border">
                  <select
                    value={estadoVenta}
                    onChange={(e) => setEstadoVenta(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="En Proceso">En Proceso</option>
                    <option value="Entregada">Entregada</option>
                    <option value="Cancelada">Cancelada</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th className="red-border sm-padding">ID Cliente</th>
                <td className="red-border">
                  <input
                    type="number"
                    value={idCliente}
                    onChange={(e) => setIdCliente(e.target.value)}
                  />
                </td>
                <th className="red-border sm-padding">Nombre Cliente</th>
                <td className="red-border">
                  <input
                    type="text"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th colSpan="2" className="th-venta red-border text-center">
                  Descripción
                </th>
                <th className="th-venta red-border text-center">Cantidad</th>
                <th className="th-venta red-border text-center">
                  Precio Unitario
                </th>
              </tr>
              {listaVenta.map((producto) => (
                <tr>
                  <td colSpan="2" className="red-border text-center">
                    {producto.descripcion}
                  </td>
                  <td className="red-border text-center">
                    <input
                      type="number"
                      value={cantidad}
                      placeholder={producto.cantidad}
                      onChange={
                        ((e) => setCantidad(e.target.value),
                        (e) =>
                          handleCantidadChange(producto._id, e.target.value))
                      }
                    />
                  </td>
                  <td className="red-border text-center">
                    {formatoMoneda(producto.valorUnitario)}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="2"></td>
                <td
                  className="subtitle"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {" "}
                  Total:
                </td>
                <td className="red-border text-center">
                  {formatoMoneda(
                    listaVenta.reduce(
                      (sum, current) =>
                        sum + current.valorUnitario * current.cantidad,
                      0
                    )
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <Link to="/listarventas">
                    <button style={{ marginRight: "20px" }}>Cancelar</button>
                  </Link>
                  <input className="mt-2 mb-2" type="submit" value="Editar" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Venta;
