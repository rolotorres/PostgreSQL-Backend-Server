// importaciones necesarias
const conn = require('../config/postgres');
const cdHelper = require('../helpers/sql/jurisdicción');
const statusHelper = require('../helpers/status/status');

const  cdModel = {};

// Obtenemos todas las jurisdicciones
cdModel.getCdad = async (req, res) => {
    try {
        const result = await conn.any(cdHelper.getCdad);
        return res.status(statusHelper.success).json({
            ok: true,
            cds: result
        });
    } catch (err) {
        return res.status(statusHelper.error).json({
            ok: false,
            mensaje: 'Error al cargar las jurisdicciones',
            errors: err
        });
    };
};

// Creamos nuevas jurisdicciones
cdModel.postCdad = async (req, res) => {
    try {
        await conn.any(cdHelper.postCdad, [req.body.departamento_id, req.body.descripcion]);
        return res.status(statusHelper.created).json({
            ok: true,
            mensaje: 'Jurisdiccion creada exitosamente'
        });
    } catch (err) {
        return res.status(statusHelper.bad).json({
            ok: false,
            mensaje: 'Ocurrió un error al crear el nuevo departamento',
            errors: err
        });
    };
};

// Actualizamos una jurisdicción
cdModel.putCdad= async (req, res) => {
    try {
        await conn.any(cdHelper.putCdad, [req.body.descripcion, req.params.cdId]);
        return res.status(statusHelper.success).json({
            ok: true,
            mensaje: 'Cambios aplicados exitosamente'
        });
    } catch (err) {
        return res.status(statusHelper.bad).json({
            ok: false,
            mensaje: 'Ocurrió un error al intentar aplicar los cambios',
            errors: err
        });
    };
};

// Inactivamos una jurisdicción
cdModel.patchCdad = async (req, res) => {
    try {
        await conn.any(cdHelper.patchCdad, [req.params.cdId]);
        return res.status(statusHelper.success).json({
            ok: true,
            mensaje: 'Jurisdicción inactivada'
        });
    } catch (err) {
        return res.status(statusHelper.bad).json({
            ok: false,
            mensaje: 'Ocurrió un error al inactivar la jurisdicción',
            errors: err
        });
    };
};

// Borramos una jurisdicción
cdModel.deleteCdad = async (req, res) => {
    try {
        await conn.any(cdHelper.deleteCdad, [req.params.cdId]);
        return res.status(statusHelper.success).json({
            ok:true,
            mensaje: 'Jurisdicción borrada exitosamente'
        })
    } catch (err) {
        return res.status(statusHelper.bad).json({
            ok: false,
            mensaje: 'Ocurrió un error al borrar la jurisdicción',
            errors: err
        });
    };
};

module.exports = cdModel;