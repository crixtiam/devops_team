const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema(
  {
    nombre: String,
    precio: Number,
  },
  { collection: 'productos' }
);

const Productos = mongoose.model('Productos', productosSchema);

module.exports = Productos;
