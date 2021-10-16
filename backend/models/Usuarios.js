const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema(
  {
    nombre: String,
    email: String,
    rol: { type: String, default: 'Usuario' },
    estado: { type: String, default: 'Pendiente' },
  },
  { collection: 'usuarios' }
);

const Usuarios = mongoose.model('Usuarios', usuariosSchema);

module.exports = Usuarios;
