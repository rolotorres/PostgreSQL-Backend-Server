// importaciones necesarias
const express = require('express');
const router = express.Router();

// importamos el modelo Login
const loginModel = require('../models/login');

router.post('/', loginModel.post);

module.exports = router;