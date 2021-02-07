// Creamos la variable global
const cdHelper = {};

cdHelper.getCdad = ('SELECT * FROM jurisdicciones');

cdHelper.postCdad = ('INSERT INTO jurisdicciones(departamento_id, descripcion, created_at) VALUES ($1, $2, now())');

cdHelper.putCdad = ('UPDATE jurisdicciones SET descripcion = $1, updated_at = now() WHERE id = $2');

cdHelper.patchCdad = ('UPDATE jurisdicciones SET activo = false, updated_at = now() where id = $1');

cdHelper.patchCdad = ('DELETE FROM jurisdicciones WHERE id = $1');

module.exports = cdHelper;