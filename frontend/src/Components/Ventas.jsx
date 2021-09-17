import { useEffect } from "react";

const Ventas = ({ ventas }) => {
  useEffect(() => {
    document.title = "Ventas";
  }, []);
  return (
    <div className="container mt-4">
      <h3>Módulo Administrador de Ventas</h3>
      <form method="post" className="mt-4">
        <label htmlFor="ID">ID: </label>
        <input type="number" className="shortInput" />
        <label htmlFor="valor">Valor: </label>
        <input type="text" className="shortInput" />
        <label htmlFor="descripcion">Descripción: </label>
        <input type="text" />
        <label htmlFor="fechaInicial">Fecha Inicial: </label>
        <input
          type="date"
          name="fechaInicial"
          id="fechaInicial"
          style={{ width: "145px" }}
        />
        <br />
        <br />
        <label htmlFor="fechaPago">Fecha Pago: </label>
        <input
          type="date"
          name="fechaPago"
          id="fechaPago"
          style={{ width: "145px" }}
        />
        <label htmlFor="responsable">Responsable: </label>
        <select name="responsable" id="responsabñe">
          <option value="William">William</option>
          <option value="Cristiam">Cristiam</option>
        </select>
        <input type="submit" value="Agregar" style={{ marginLeft: "20px" }} />
      </form>
      <table className="mt-4">
        <tr>
          <th>ID</th>
          <th>Valor</th>
          <th>Descripción</th>
          <th>Fecha Inicial</th>
          <th>Fecha Pago</th>
          <th>Responsable</th>
        </tr>
        {ventas.map((venta) => (
          <tr>
            <td>{venta.id}</td>
            <td>{venta.valor}</td>
            <td>{venta.descripcion}</td>
            <td>{venta.fechaInicial}</td>
            <td>{venta.fechaPago}</td>
            <td>{venta.responsable}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Ventas;
