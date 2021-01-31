const conn = require('../config/config');

// Obtenemos todos los departamentos
async function getDpto(req, res){
    try{
        const result = await conn.any('SELECT * FROM departamentos');
        return res.status(200).json({
            ok: true,
            dptos: result
        });
    } catch (err){
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al cargar los Departamentos',
            errors: err
        });
    };
};

// Creamos nuevos departamentos
async function postDpto(req, res){
    try {
        await conn.any(`INSERT INTO departamentos(descripcion, created_at) VALUES ($1, now())`, [req.body.descripcion])
        return res.status(201).json({
            ok: true,
            mensaje: 'Departamento creado exitosamente',
        });
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al crear el nuevo departamento',
            errors: err
        });
    };
}

// Actualizamos un departamento
async function putDpto(req, res){
    try {
        await conn.any(`UPDATE departamentos SET descripcion = $1, updated_at = now() WHERE id = $2`, [req.body.descripcion, req.params.dptoId])
        return res.status(200).json({
            ok: true,
            mensaje: 'Cambios aplicados'
        })
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al intentar aplicar los cambios',
            errors: err
        });
    }
}

// Inactivamos un departamento
async function patchDpto(req, res){
    try {
        await conn.any(`UPDATE departamentos SET activo = false, updated_at = now() WHERE id = $1`, [req.params.dptoId])
        return res.status(200).json({
            ok: true,
            mensaje: 'Departamento borrado'
        })
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al borrar el departamento',
            errors: err
        });
    }
}

// Borramos un departamento
async function deleteDpto(req, res){
    try {
        await conn.any(`DELETE FROM departamentos WHERE id = $1`, [req.params.dptoId])
        return res.status(200).json({
            ok: true,
            mensaje: 'Departamento borrado permanentemente'
        })
    } catch (err) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Ocurrió un error al borrar el departamento',
            errors: err
        });
    }
}

module.exports = {
    getDpto,
    postDpto,
    putDpto,
    patchDpto,
    deleteDpto
};