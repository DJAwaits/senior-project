import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'senror_project'
}).promise()

const result = await pool.query("Select * from users")
console.log(result)