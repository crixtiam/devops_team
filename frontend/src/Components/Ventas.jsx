import { useState, useEffect } from "react";

const Ventas = ({ ventas }) => {
  useEffect(() => {
    document.title = "Ventas";
  }, []);

  function currencyFormat(num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  const [valor, setValor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaPago, setFechaPago] = useState("");
  const [responsable, setResponsable] = useState("");

  const addVenta = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:5000/ventas", {
      method: "POST",
      body: JSON.stringify({
        valor: parseInt(valor),
        descripcion,
        fechaInicial,
        fechaPago,
        responsable,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload(false);
  };

  const deleteVenta = async (id) => {
    await fetch(`http://localhost:5000/ventas/${id}`, { method: "DELETE" });
    window.location.reload(false);
  };

  return (
    <div className="container mt-4">
      <h3>Módulo Administrador de Ventas</h3>
      <div className="d-flex justify-content-center">
        <form method="post" className="mt-4" onSubmit={addVenta}>
          <label htmlFor="valor">Valor: </label>
          <input
            type="number"
            style={{ width: "90px" }}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
          <label htmlFor="descripcion">Descripción: </label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
          <label htmlFor="fechaInicial">Fecha Inicial: </label>
          <input
            type="date"
            name="fechaInicial"
            id="fechaInicial"
            style={{ width: "145px" }}
            value={fechaInicial}
            onChange={(e) => setFechaInicial(e.target.value)}
            required
          />
          <label htmlFor="fechaPago">Fecha Pago: </label>
          <input
            type="date"
            name="fechaPago"
            id="fechaPago"
            style={{ width: "145px" }}
            value={fechaPago}
            onChange={(e) => setFechaPago(e.target.value)}
            required
          />
          <label htmlFor="responsable">Responsable: </label>
          <select
            name="responsable"
            id="responsable"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
            required
          >
            <option value=""></option>
            <option value="William">William</option>
            <option value="Cristiam">Cristiam</option>
            <option value="Cristian">Cristian</option>
            <option value="Juan David">Juan David</option>
            <option value="Diego">Diego</option>
          </select>

          <input type="submit" value="Agregar" style={{ marginLeft: "20px" }} />
          <br />
          <br />
          <hr />
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <table className="mt-4">
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
            {ventas.map((venta) => (
              <tr>
                <td>{venta.id}</td>
                <td>{currencyFormat(venta.valor)}</td>
                <td>{venta.descripcion}</td>
                <td>{venta.fechaInicial}</td>
                <td>{venta.fechaPago}</td>
                <td>{venta.responsable}</td>
                <td>
                  <img
                    src="/edit.svg"
                    width="21"
                    className="ss-record-icon"
                    alt="Edit"
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src="/trash-alt.svg"
                    alt="Delete"
                    width="15"
                    onClick={() => deleteVenta(venta.id)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
