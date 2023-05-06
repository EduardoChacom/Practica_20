require('dotenv').config();  // Se importa dotenv para cargar variables de entorno desde el archivo .env
const express = require('express');  // Se importa el framework Express
const mongoose = require('mongoose');  // Se importa Mongoose para trabajar con MongoDB
const personsRouters = require('./routes/persons');  // Se importa el archivo de rutas persons.js

mongoose.Promise = global.Promise;  // Se establece la promesa global de Mongoose para evitar errores de depreciación

const app = express();  // Se crea una instancia de Express
const port = process.env.PORT || 3000;  // Se define el puerto en el que se escucharán las solicitudes de HTTP. Se lee de la variable de entorno `PORT`, o se establece en 3000 por defecto.

app.set('view engine', 'ejs');  // Se establece el motor de plantillas EJS
app.use(express.urlencoded({extended:false}));  // Se habilita el middleware de análisis de cuerpos de solicitud en formato URL-encoded
app.use(personsRouters);  // Se utiliza el archivo de rutas persons.js

mongoose.connect(process.env.MONGODB_URI)  // Se conecta a la base de datos de MongoDB Atlas, utilizando la URL en la variable de entorno `MONGODB_URI`
  .then(() => console.log('Connected to MongoDB Atlas'))  // Si la conexión es exitosa, se muestra un mensaje en la consola
  .catch((error) => console.error(`Error connecting to MongoDB Atlas: ${error}`));  // Si la conexión falla, se muestra un mensaje de error en la consola

console.log(`MONGODB_URI: ${process.env.MONGODB_URI}`);  // Se muestra la URL de la base de datos en la consola

const path = require('path');
app.use('/assets', express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));  // Se inicia el servidor en el puerto definido, y se muestra un mensaje en la consola

console.log(process.env);  // Se muestran todas las variables de entorno en la consola
