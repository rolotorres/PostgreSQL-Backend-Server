// importaciones necesarias
const conn = require('../config/postgres');
const dptoHelper = require('../helpers/sql/departamento');
const statusHelper = require('../helpers/status/status');

const dptoModel = {};

// Obtenemos todos los departamentos
dptoModel.getDpto = async (req, res) => {
    try{
        const result = await conn.any(dptoHelper.getDpto);
        return res.status(statusHelper.success).json({
            ok: true,
            dptos: result
        });
    } catch (err){
        return res.status(statusHelper.error).json({
            ok: false,
            mensaje: 'Error al cargar los Departamentos',
            errors: err
        });
    };
};

// Creamos nuevos departamentos
dptoModel.postDpto = async (req, res) => {
    try {
        await conn.any(dptoHelper.postDpto, [req.body.descripcion])
        return res.status(statusHelper.created).json({
            ok: true,
            mensaje: 'Departamento creado exitosamente'
        });
    } catch (err) {
        return res.status(statusHelper.bad).json({
            ok: false,
            mensaje: 'Ocurrió un error al crear el nuevo departamento',
            errors: err
        });
    };
};

// Actualizamos un departamento
dptoModel.putDpto = async (req, res) => {
    try {
        await conn.any(dptoHelper.putDpto, [req.body.descripcion, req.params.dptoId]);
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

// Inactivamos un departamento
dptoModel.patchDpto = async (req, res) => {
    try {
        await conn.any(dptoHelper.patchDpto, [req.params.dptoId])
        return res.status(statusHelper.success).json({
            ok: true,
            mensaje: 'Departamento borrado'
        });
    } catch (err) {
        return res.status(statusHelper.bad).json({
            ok: false,
            mensaje: 'Ocurrió un error al borrar el departamento',
            errors: err
        });
    };
};

// Borramos un departamento
dptoModel.deleteDpto = async (req, res) => {
    try {
        await conn.any(dptoHelper.deleteDpto, [req.params.dptoId])
        return res.status(statusHelper.success).json({
            ok: true,
            mensaje: 'Departamento borrado permanentemente'
        });
    } catch (err) {
        return res.status(statusHelper.bad).json({
            ok: false,
            mensaje: 'Ocurrió un error al borrar el departamento',
            errors: err
        });
    };
};

module.exports = dptoModel;