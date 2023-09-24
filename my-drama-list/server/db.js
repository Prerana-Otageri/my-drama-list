const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: '',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'mydramalist'
})

module.exports = pool