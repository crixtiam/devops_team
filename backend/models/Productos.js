const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema(
  {
    descripcion: String,
    valorUnitario: Number,
    estado: String,
  },
  { collection: 'productos' }
);

const Productos = mongoose.model('Productos', productosSchema);

module.exports = Productos;
