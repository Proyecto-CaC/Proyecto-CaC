const mysql = require('mysql2');

const pool = mysql.createPool({
port:3306,
host:'localhost',
user:'root',
password:'Kravatte.55.',
database:'funko_schema',
    connectionLimit: 20,
    waitForConnections: true,
    queueLimit: 0,
});

pool.getConnection((err, conn) => {
    if (err) {
        console.log('Hubo un error al conectarse con la DB: ' + err);
    } else {
        console.log("Conexión a la DB exitosa!");
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
}