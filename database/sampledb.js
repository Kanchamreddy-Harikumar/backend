const mysql = require('mysql2/promise');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'H@ri2001',
    database: 'sampledb'
});

module.exports = db;