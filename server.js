// server.js

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const path = require('path');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'cookies_basic',
    authPlugin: 'mysql_native_password'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/sell-cookie', (req, res) => {
    const { flavor, quantity } = req.body;

    const sql = 'INSERT INTO cookie_sales (flavor, quantity) VALUES (?, ?)';
    db.query(sql, [flavor, quantity], (err, result) => {
        if (err) {
            console.error('MySQL error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/sold-cookies');
        }
    });
});

app.get('/sold-cookies', (req, res) => {
    const sql = 'SELECT * FROM cookie_sales';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('MySQL error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const tableRows = results.map(row => `<tr><td>${row.id}</td><td>${row.flavor}</td><td>${row.quantity}</td></tr>`).join('');
            const tableHtml = `<html>
                                <head>
                                    <title>Sold Cookies</title>
                                </head>
                                <body>
                                    <h1>Sold Cookies</h1>
                                    <table border="1">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Flavor</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${tableRows}
                                        </tbody>
                                    </table>
                                </body>
                            </html>`;

            res.send(tableHtml);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
