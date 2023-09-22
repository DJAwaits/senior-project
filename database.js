import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'senror_project'
}).promise()

async function createUser(username, password, email) {
    const result = await pool.query(`INSERT INTO users (username, password, email)
    values (?, ?, ? )`, [username, password, email])
    return result.insertId
}

async function getUsers() {
    const [rows] = await pool.query("Select * from users")
    return rows
}

async function getUser(id) {
    const [rows] = await pool.query(`Select * from users Where userid = ?`, [id])
    return rows[0]
}



const obj = await createUser('test', 'test', 'test@gmail.com')
console.log(obj)
