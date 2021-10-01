const Usuarios = () => {
    document.title = 'Usuarios';

    return(
        <div className='container mt-4'>
            <h3>Interfaz de Usuario del Maestro de Ususarios</h3>
            <div className='d-flex justify-content-center'>
                <table className='mt-4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Actualizar rol</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Juan David</td>
                            <td>
                                <select name="rol" id="rol">
                                    <option value=""></option>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Vendedor">Vendedor</option>
                                </select>
                            </td>
                            <td>
                                <select name="estado" id="estado">
                                    <option value=""></option>
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="Autorizado">Autorizado</option>
                                    <option value="No Autorizado">No Autorizado</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Usuarios;