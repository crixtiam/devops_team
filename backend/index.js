const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Para que muestre las peticiones y respuestas por consola

// Crear app con express
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // Para que siempre haga parse JSON de lo que se le manda en petición desde el front

// Conexión a DB
mongoose
  .connect(
    'mongodb+srv://devops:Q7DeC4y6QQLMbxh@cluster0.ghdje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then((db) => console.log('BD Conectada'))
  .catch((err) => console.log(err));

// Modelos de la base de datos

// Rutas

// Inicializar servidor express en puerto 3001
app.listen(3001, () => {
  console.log('API corriendo en el puerto 3001.');
});
