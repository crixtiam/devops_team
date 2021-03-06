import { useState, useEffect } from "react";
import axios from "axios";

const Usuarios = () => {
  document.title = "Usuarios";

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getUsuarios = () => {
      axios
        .get("https://devops-api-dccj.herokuapp.com/usuarios")
        .then((res) => setUsuarios(res.data))
        .catch((err) => console.log(err));
    };
    getUsuarios();
  }, []);

  const handleRolChange = async (_id, rol) => {
    const usuario = usuarios.find((usuario) => usuario._id === _id);
    const index = usuarios.indexOf(usuario);
    usuario.rol = rol;
    usuarios[index] = { ...usuario };
    setUsuarios([...usuarios]);
    await axios
      .post("https://devops-api-dccj.herokuapp.com/usuarios", usuario)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleEstadoChange = async (_id, estado) => {
    const usuario = usuarios.find((usuario) => usuario._id === _id);
    const index = usuarios.indexOf(usuario);
    usuario.estado = estado;
    usuarios[index] = { ...usuario };
    setUsuarios([...usuarios]);
    await axios
      .post("https://devops-api-dccj.herokuapp.com/usuarios", usuario)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <h3 className="subtitle">Usuarios</h3>
      </div>
      <div className="d-flex justify-content-center">
        <table className="mt-4">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Actualizar rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario._id}>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>
                  <select
                    name="rol"
                    id="rol"
                    value={usuario.rol}
                    onChange={(e) =>
                      handleRolChange(usuario._id, e.target.value)
                    }
                  >
                    <option value=""></option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Usuario">Usuario</option>
                  </select>
                </td>
                <td>
                  <select
                    name="estado"
                    id="estado"
                    value={usuario.estado}
                    onChange={(e) =>
                      handleEstadoChange(usuario._id, e.target.value)
                    }
                  >
                    <option value=""></option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Autorizado">Autorizado</option>
                    <option value="No Autorizado">No Autorizado</option>
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

export default Usuarios;
