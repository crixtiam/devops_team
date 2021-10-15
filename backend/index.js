const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Para que muestre las peticiones y respuestas por consola
const cors = require('cors'); // Para que el front pueda hacer peticiones al back y proteger / restringir el back a solo nuestro front
require('dotenv').config(); // Para las variables de entorno privadas

// Crear app con express
const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('dev'));
app.use(express.json()); // Para que siempre haga parse JSON de lo que se le manda en petición desde el front

// Conexión a BD
mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => console.log('BD Conectada'))
  .catch((err) => console.log(err));

// Modelos de la base de datos
const Productos = require('./models/Productos');
const Ventas = require('./models/Ventas');

// Rutas Ventas
app.get('/ventas', async (req, res) => {
  const ventas = await Ventas.find({});
  res.send(ventas);
});

app.post('/ventas', async (req, res) => {
  const venta = new Ventas(req.body);
  console.log(venta);
  venta.save();
  res.send(venta);
});

app.put('/ventas/:_id', async (req, res) => {
  const venta = await Ventas.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true });
  venta.save();
  res.send(venta);
});

app.delete('/ventas/:_id', async (req, res) => {
  const venta = await Ventas.findByIdAndRemove(req.params._id);
  res.send(venta);
});

// Rutas Productos
app.get('/productos', async (req, res) => {
  const productos = await Productos.find({});
  res.send(productos);
});

app.post('/productos', async (req, res) => {
  const producto = new Productos(req.body);
  producto.save();
  res.send(producto);
});

app.put('/productos/:_id', async (req, res) => {
  const producto = await Productos.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
  });
  producto.save();
  res.send(producto);
});

app.delete('/productos/:_id', async (req, res) => {
  const producto = await Productos.findByIdAndRemove(req.params._id);
  res.send(producto);
});

// Inicializar servidor express en puerto 3001
app.listen(3001, () => {
  console.log('API corriendo en el puerto 3001.');
});
