// Importaciones necesarias
const express = require('express');
const statusHelper = require('../helpers/status/status');

// Inicializamos el express
const app = express();

app.get('/', (req, res) => {
    res.status(statusHelper.success).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

module.exports = app;