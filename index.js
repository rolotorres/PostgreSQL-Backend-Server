// Importaciones necesarias
require('dotenv').config();
const express = require('express');
const db = require('./config/postgres');
var bodyParser = require('body-parser');

const ldap = require('ldapjs');

// Inicializamos el express
const app = express();

// Body parser: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoutes = require('./routes/app');
const loginRoutes = require('./routes/login');
const cdsRoutes = require('./routes/jurisdiccion');
const dptosRoutes = require('./routes/departamentos');

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
});

app.use('/dptos', dptosRoutes);
app.use('/login', loginRoutes);
app.use('/cds', cdsRoutes);
app.use('/', appRoutes);



// async function authDN(usuario, password) {
//     let client = ldap.createClient({
//         url: process.env.LDAP_CNN
//     });

//     let opts = {
//         filter: '(objectClass=*)',
//         scope: 'sub',
//         attributes: ['dn', 'sn', 'cn']
//     };

//     client.bind(usuario, password, (err) => {
//         if(err){
//             console.error('error en la autenticación: ' + err);
//         }else {
//             console.log('Autenticación exitosa');

//             // client.search('OU=Usuarios,OU=Senatur,DC=Senatur,DC=local', opts, (err, res) => {
//             //     if(err){
//             //         console.error('error en la autenticación ' + err);
//             //     }else{
//             //         res.on('searchEntry', (entry) => {
//             //             console.log('entry: ' + JSON.stringify(entry.object));
//             //         });

//             //         res.on('searchReference', (referral) => {
//             //             console.log('referral: ' + referral.uris.join());
//             //         });

//             //         res.on('error', (err) => {
//             //             console.log('error: ' + err.message);
//             //         });

//             //         res.on('end', (result) => {
//             //             console.log('status: ' + result.status);
//             //         });
//             //     }

//             // });
//         }
//     });
// }

// authDN("CN=Oscar Rolando Torres,OU=Usuarios,OU=Senatur,DC=Senatur,DC=local", '123abc__');