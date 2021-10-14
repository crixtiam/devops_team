const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosVentaSchema = new Schema({
  descripcion: String,
  cantidad: Number,
  precioUnitario: Number,
});

const ventasSchema = new Schema(
  {
    encargado: String,
    idCliente: Number,
    fecha: String,
    estadoVenta: String,
    nombreCliente: String,
    productosVenta: [productosVentaSchema],
  },
  { collection: 'ventas' }
);

const Ventas = mongoose.model('Ventas', ventasSchema);

module.exports = Ventas;
