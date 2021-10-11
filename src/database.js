const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    //Localmente
    host: 'localhost',
    user: 'root', //user por defecto
    password: 'irso',
    database: 'irso_2021',
    multipleStatements: true

    //En la web
    // host: 'www.db4free.net',
    // port: '3306',
    // user: 'crpirso', //user por defecto
    // password: 'bfef8ed1',
    // database: 'irsotaller6',
    // multipleStatements: true
});

//Verifico si me conecte correctamente a la base de datos
mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('base de datos conectado');
    }
});

module.exports = mysqlConnection;
