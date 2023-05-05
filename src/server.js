// Inyectamos la dependencia express
require('dotenv').config();
const express = require('express');
// Inyectamos la dependencia mongoose
const mongoose = require('mongoose');
const personsRouters = require('./routes/persons');

mongoose.Promise = global.Promise;
// Creamos una instancia de express
const app = express();
// Definimos el puerto de escucha
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(personsRouters);
// Conectamos a la base de datos de MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(`Error connecting to MongoDB Atlas: ${error}`));
console.log(`MONGODB_URI: ${process.env.MONGODB_URI}`);


// Iniciamos el servidor en el puerto 4000 y mostramos un mensaje en consola
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

console.log(process.env);
