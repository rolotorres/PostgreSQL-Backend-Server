// Creamos la variable global
const dptoHelper = {}

dptoHelper.getDpto = ('SELECT * FROM departamentos');

dptoHelper.postDpto = ('INSERT INTO departamentos(descripcion, created_at) VALUES ($1, now())');

dptoHelper.putDpto = ('UPDATE departamentos SET descripcion = $1, updated_at = now() WHERE id = $2');

dptoHelper.patchDpto = ('UPDATE departamentos SET activo = false, updated_at = now() WHERE id = $1');

dptoHelper.deleteDpto = ('DELETE FROM departamentos WHERE id = $1');

module.exports = dptoHelper;