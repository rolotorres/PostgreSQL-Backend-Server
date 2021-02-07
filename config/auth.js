const ldap = require('ldapjs');

function authDN(usuario, password) {
    const client = ldap.createClient({
        url: process.env.LDAP_CNN
    });

    client.bind(usuario, password, (err) => {
        if(err){
            console.error("error en la autenticación" + err);
        }else {
            console.log('Autenticación exitosa');
        }
    });
}

authDN("uid=administrador,ou=senatur", "Supercontrasena1");