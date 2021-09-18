import { useEffect } from "react";

const Estado = ({ ventas }) => {
  useEffect(() => {
    document.title = "Estado";
  }, []);

  function currencyFormat(num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  const patchEstado = async (id, value) => {
    await fetch(`http://localhost:5000/ventas/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        estado: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload(false);
  };

  return (
    <div className="container mt-4">
      <h3>Módulo para registrar el estado de la venta</h3>
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
              <th>Estado</th>
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
                  <select
                    name="estado"
                    id="estado"
                    value={venta.estado}
                    onChange={(e) => patchEstado(venta.id, e.target.value)}
                    required
                  >
                    <option value=""></option>
                    <option value="Creación">Creación</option>
                    <option value="Embalaje">Embalaje</option>
                    <option value="Despacho">Despacho</option>
                    <option value="Ruta">Ruta</option>
                    <option value="Ubicación">Ubicación</option>
                    <option value="Recepción">Recepción</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estado;
