const express = require('express');
const cors = require('cors');
const app = express();

const nodemailer = require("./routes/nodemailer-ruta")

// Middleware para manejar errores
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

// Evento para manejar excepciones no capturadas
process.on('uncaughtException', (err) => {
    console.error('Se produjo una excepción no capturada:', err);
});


app.use(cors());
app.use(express.json());

app.use("/nodemailer", nodemailer)

module.exports = app;