const express = require('express');
const bodyParser = require('body-parser');
const Constantes = require('./utils/constantes');
const ClienteController = require("./controllers/cliente.controller");
const mongoose = require("mongoose");

mongoose.connect(Constantes.BBDD_URL);

const app = express();

app.use(bodyParser.json());                           // para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));     // para que acepte codificacion UTF-8

app.use("/cliente", ClienteController);
app.listen(Constantes.PORT, Constantes.HOST);
