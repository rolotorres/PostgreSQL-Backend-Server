// importaciones necesarias
const express = require('express');
const router = express.Router();

// importamos el modelo Jurisdiccion
const cdModel = require('../models/jurisdiccion');

router.get('/', cdModel.getCdad);

router.post('/', cdModel.postCd);

router.put('/:cdId', cdModel.putCd);

router.patch('/:cdId', cdModel.patchCd);

router.delete('/:cdId', cdModel.deleteCd);

module.exports = router;