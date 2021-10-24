import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NuevaVenta = () => {
  const [encargado, setEncargado] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [productos, setProductos] = useState([]);
  const [listaVenta, setListaVenta] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState([]);
  const [cantidad, setCantidad] = useState();

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get(
        "https://devops-api-dccj.herokuapp.com/productos"
      );
      setProductos(res.data);
    };
    getProductos();
  }, []);

  const handleProductoSeleccionado = (_id) => {
    setProductoSeleccionado(productos.filter((prod) => prod._id === _id)[0]);
  };

  const agregarListaVenta = (e) => {
    e.preventDefault();
    if (productoSeleccionado.estado === "No Disponible") {
      window.alert("El producto no se encuenta disponible");
      setCantidad("");
      return;
    }
    !cantidad && window.alert("Seleccione una cantidad");
    setListaVenta([
      ...listaVenta,
      { ...productoSeleccionado, cantidad: cantidad },
    ]);
    setCantidad("");
  };

  const enviarVenta = async (e) => {
    e.preventDefault();
    await axios.post("https://devops-api-dccj.herokuapp.com/ventas", {
      encargado: encargado,
      idCliente: idCliente,
      fecha: fecha,
      estadoVenta: estado,
      nombreCliente: nombreCliente,
      productosVenta: [...listaVenta],
      valorTotal: listaVenta.reduce(
        (sum, current) => sum + current.valorUnitario * current.cantidad,
        0
      ),
    });
    window.history.back();
  };

  // Dar formato al valor con $ al principio y separado por .
  function formatoMoneda(num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return (
    <div className="container mt-4">
      <h3>Interfaz Nueva Venta</h3>
      <br />
      <div className="d-flex justify-content-center">
        <form onSubmit={enviarVenta}>
          <table className="red-border">
            <tbody>
              <tr>
                <th colSpan="2" className="th-venta red-border sm-padding">
                  Nueva Venta
                </th>
                <th className="red-border sm-padding">Fecha</th>
                <td className="red-border">
                  <input
                    type="date"
                    name="fechaVenta"
                    id="fechaVenta"
                    onChange={(e) => setFecha(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th className="red-border sm-padding">Encargado</th>
                <td className="red-border">
                  <select
                    name="encargado"
                    id="encargado"
                    onChange={(e) => setEncargado(e.target.value)}
                    required
                  >
                    <option value=""></option>
                    <option value="William">William</option>
                    <option value="Diego Valencia">Diego Valencia</option>
                    <option value="Cristian">Cristian</option>
                  </select>
                </td>
                <th className="red-border sm-padding">Estado</th>
                <td className="red-border">
                  <select onChange={(e) => setEstado(e.target.value)} required>
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
                    name="idCliente"
                    id="idCliente"
                    onChange={(e) => setIdCliente(e.target.value)}
                    required
                  />
                </td>
                <th className="red-border sm-padding">Nombre Cliente</th>
                <td className="red-border">
                  <input
                    type="text"
                    name="nombreCliente"
                    id="nombreCliente"
                    onChange={(e) => setNombreCliente(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th className="th-venta red-border text-center">Producto</th>
                <th className="th-venta red-border text-center">
                  Valor Unitario
                </th>
                <th className="th-venta red-border text-center">Estado</th>
                <th className="th-venta red-border text-center">Cantidad</th>
              </tr>
              <tr>
                <td className="red-border text-center">
                  <select
                    onChange={(e) => handleProductoSeleccionado(e.target.value)}
                    required
                  >
                    <option value="" />
                    {productos.map((producto) => (
                      <option value={producto._id} key={producto._id}>
                        {producto.descripcion}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="red-border">
                  {productoSeleccionado.valorUnitario
                    ? formatoMoneda(productoSeleccionado?.valorUnitario)
                    : ""}
                </td>
                <td className="red-border">{productoSeleccionado?.estado}</td>
                <td className="red-border">
                  <input
                    type="number"
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <button className="mt-3 mb-3" onClick={agregarListaVenta}>
                    Agregar
                  </button>
                </td>
              </tr>
              <tr>
                <th colSpan="4" className="th-venta red-border text-center">
                  Lista
                </th>
              </tr>
              {listaVenta.map((producto) => (
                <tr key={producto._id}>
                  <td className="red-border">{producto.descripcion}</td>
                  <td className="red-border">
                    {producto.valorUnitario
                      ? formatoMoneda(producto.valorUnitario)
                      : ""}
                  </td>
                  <td className="red-border">{producto.cantidad}</td>
                  <td className="red-border">
                    {producto.valorUnitario * producto.cantidad !== 0
                      ? formatoMoneda(
                          producto.valorUnitario * producto.cantidad
                        )
                      : ""}
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
            </tbody>
          </table>
          <br />
          <div className="d-flex justify-content-center">
            <Link to="/listarventas">
              <button style={{ marginRight: "20px" }}>Cancelar</button>
            </Link>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevaVenta;
