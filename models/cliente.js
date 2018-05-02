const Constantes = require("../utils/constantes");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nombre: {
        type: String, 
        required: "El nombre es obligatorio", 
        maxlength:[50, "El nombre no puede superar los 50 caracteres"]
    },
    apellido: {
        type: String, 
        required: "El apellido es obligatorio", 
        maxlength:[50, "El apellido no puede superar los 50 caracteres"]
    },
    dni: {
        type: Number, 
        min: [5000000, "El DNI no puede ser menor a 5000000"], 
        max: [100000000, "El DNI no puede ser mayor a 100000000"]
    },
    telefono: {
        type: String,
        match: [Constantes.TELEPHONE_PATTERN, "Ingrese un teléfono válido"],
        maxlength:[50, "El télefono no puede superar los 50 caracteres"]
    },
    email: {
        type: String, 
        required: "El email es obligatorio", 
        match: [Constantes.EMAIL_PATTERN, "Ingrese un email válido"], 
        maxlength: [50, "El email no puede superar los 50 caracteres"]
    },
    direccion: {
        type: String, 
        maxlength: [50, "La dirección no puede superar los 50 caracteres"]
    }
});

var Cliente = mongoose.model("Cliente", clienteSchema);

module.exports.Cliente = Cliente;