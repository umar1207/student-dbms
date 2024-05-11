const mysql = require('mysql');
require('dotenv').config();

// establish connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD, // use your own password in .env file as DB_PASSWORD=your_password
    database: 'student_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');
});

module.exports = connection;