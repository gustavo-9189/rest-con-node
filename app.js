// Dependencias de Terceros
const express = require('express');
const bodyParser = require('body-parser');            // Para parsear el body de las peticiones http
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");

// Dependencias Propias
const Constantes = require('./utils/constantes');
const ClienteController = require("./controllers/cliente.controller");
const swaggerDocument = require("./swagger.json");

// Conexion a la BBDD
mongoose.connect(Constantes.BBDD_URL);

const app = express();

app.use(bodyParser.json());                           // para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));     // para que acepte codificacion UTF-8

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/cliente", ClienteController);
app.listen(Constantes.PORT, Constantes.HOST);
