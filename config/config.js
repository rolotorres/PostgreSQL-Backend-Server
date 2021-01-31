const pgp = require('pg-promise')()

const connString = process.env.DB_CNN;

const db = pgp(connString);

module.exports = db;