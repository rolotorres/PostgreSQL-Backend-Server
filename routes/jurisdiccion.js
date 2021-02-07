// importaciones necesarias
const express = require('express');
const router = express.Router();

// importamos el modelo Jurisdiccion
const cdModel = require('../models/jurisdiccion');

router.get('/', cdModel.getCdad);

router.post('/', cdModel.postCdad);

router.put('/:cdId', cdModel.putCdad);

router.patch('/:cdId', cdModel.patchCdad);

router.delete('/:cdId', cdModel.deleteCdad);

module.exports = router;