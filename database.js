import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'senror_project'
}).promise()

export async function createUser(username, password, email) {
    const result = await pool.query(`INSERT INTO users (username, password, email)
    values (?, ?, ? )`, [username, password, email])
    const id = result.insertId
    return getUser(id)
}

export async function getUsers() {
    const [rows] = await pool.query("Select * from users")
    return rows
}

export async function getUser(id) {
    const [rows] = await pool.query(`Select * from users Where userid = ?`, [id])
    return rows[0]
}




