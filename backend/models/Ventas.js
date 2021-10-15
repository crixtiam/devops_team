const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const productosVentaSchema = new Schema({
  descripcion: String,
  cantidad: Number,
  valorUnitario: Number,
  _id: ObjectId,
});

const ventasSchema = new Schema(
  {
    encargado: String,
    idCliente: Number,
    fecha: String,
    estadoVenta: String,
    nombreCliente: String,
    productosVenta: [productosVentaSchema],
    valorTotal: Number,
  },
  { collection: 'ventas' }
);

const Ventas = mongoose.model('Ventas', ventasSchema);

module.exports = Ventas;
