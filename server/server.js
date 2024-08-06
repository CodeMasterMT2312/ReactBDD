const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.use(cors());
app.use(express.json());

const port = 5000;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"123456",
    database:"students",
});

app.listen(port, () => {
    console.log(`listening`);
});