// Importaciones necesarias
const ldap = require('ldapjs');

const loginModel = {}

async function authDN(usuario, password) {
    let client = ldap.createClient({
        url: process.env.LDAP_CNN
    });

    // Nos logueamos con nuestro usuario de AD
    loginModel.post = async (req, res) => {
        try {
            await authDN([req.body.usuario, req.body.password]);
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
    client.bind(usuario, password, (err) => {
        if(err){
            console.error('error en la autenticación: ' + err);
        }else {
            console.log('Autenticación exitosa');
        }
    });
    
}

// authDN(usuario, password);