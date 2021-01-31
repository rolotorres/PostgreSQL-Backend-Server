// importaciones necesarias
const express = require('express');
const dptoModel = require('../models/departamento');
const router = express.Router();

// importamos el modelo Departamento
const Dpto = require('../models/departamento');

router.get('/', dptoModel.getDpto);

router.post('/', dptoModel.postDpto);

router.put('/:dptoId', dptoModel.putDpto);

router.patch('/:dptoId', dptoModel.patchDpto);

router.delete('/:dptoId', dptoModel.deleteDpto);

module.exports = router;