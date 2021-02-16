const jwt = require('jsonwebtoken');
const conn = require('../config/active-directory');
const statusHelper = require('../helpers/status/status');

const loginModel = {}

// Nos logueamos con nuestro usuario de AD
loginModel.post = async (req, res) => {
    try {
        await conn.authDN([req.body.usuario, req.body.password]);
        return res.status(statusHelper.success).json({
            ok: true,
            mensaje: 'Login exitoso'
        });
    } catch (err) {
        return res.status(statusHelper.error).json({
            ok: false,
            mensaje: 'Oops.! Parece que tus credenciales no son correctas',
            errors: err
        });
    };
};

module.exports = loginModel;