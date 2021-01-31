// Importaciones necesarias
require('dotenv').config();
const express = require('express');
const db = require('./config/config');
var bodyParser = require('body-parser');

// Inicializamos el express
const app = express();

// Body parser: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var appRoutes = require('./routes/app');
const dptosRoutes = require('./routes/departamentos');

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
});

app.use('/dptos', dptosRoutes);
app.use('/', appRoutes);