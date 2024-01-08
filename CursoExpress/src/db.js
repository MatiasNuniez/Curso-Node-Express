// Instalamos un driver de conexion y lo usamos como queremos
//BBDD Mas usadas MYSQL, MONGOBD Y POSTGRESQL
//PlanetScale para consumir una bbdd de mysql
const mysql = require('mysql2/promise')

const connectDB = async () => {
    const connection = await mysql.createConnection({
        host:'',
        user:'',
        password:'',
        database:'',
    })

    const result = await connectDB.query('SELECT 1 + 1 AS RESULT')
    console.log(result);
}

module.exports = connectDB;
