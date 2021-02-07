// importaciones necesarias
const conn = require('../config/config');

const  cdModel = {};

// Obtenemos todas las jurisdicciones
cdModel.getCdad = async (req, res) => {
    try {
        const result = await conn.any(`SELECT * FROM jurisdicciones`);
        return res.status(200).json({
            ok: true,
            cds: result
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al cargar las jurisdicciones',
            errors: err
        });
    };
};

// Creamos nuevas jurisdicciones
cdModel.postCd = async (req, res) => {
    try {
        await conn.any(`INSERT INTO jurisdicciones(departamento_id, descripcion, created_at) VALUES ($1, $2, now())`, [req.body.departamento_id, req.body.descripcion]);
        return res.status(201).json({
            ok: true,
            mensaje: 'Jurisdiccion creada exitosamente'
        });
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al crear el nuevo departamento',
            errors: err
        });
    };
};

// Actualizamos una jurisdicción
cdModel.putCd = async (req, res) => {
    try {
        await conn.any(`UPDATE jurisdicciones SET descripcion = $1, updated_at = now() WHERE id = $2`, [req.body.descripcion, req.params.cdId]);
        return res.status(200).json({
            ok: true,
            mensaje: 'Cambios aplicados exitosamente'
        });
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al intentar aplicar los cambios',
            errors: err
        });
    };
};

// Inactivamos una jurisdicción
cdModel.patchCd = async (req, res) => {
    try {
        await conn.any(`UPDATE jurisdicciones SET activo = false, updated_at = now() where id = $1`, [req.params.cdId]);
        return res.status(200).json({
            ok: true,
            mensaje: 'Jurisdicción inactivada'
        });
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al inactivar la jurisdicción',
            errors: err
        });
    };
};

// Borramos una jurisdicción
cdModel.deleteCd = async (req, res) => {
    try {
        await conn.any(`DELETE FROM jurisdicciones WHERE id = $1`, [req.params.cdId]);
        return res.status(200).json({
            ok:true,
            mensaje: 'Jurisdicción borrada exitosamente'
        })
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al borrar la jurisdicción',
            errors: err
        });
    };
};

module.exports = cdModel;