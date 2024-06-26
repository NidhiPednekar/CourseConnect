// server.js
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3003;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "College"
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to search colleges
app.get('/search', (req, res) => {
    const query = req.query.q;
    const sql = `SELECT DISTINCT CName, Addr, Contact FROM Colleges WHERE CName LIKE ?`;
    db.query(sql, [`%${query}%`], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
