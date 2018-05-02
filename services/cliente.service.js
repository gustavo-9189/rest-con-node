const Cliente = require("../models/cliente").Cliente;

const service = {};

service.findAll = function(req, res) {
    const onSuccess = (docs) => {
        res.send(docs);
    };
    const onError = (err) => {
        console.log(String(err));
        res.send("Hubo un error al obtener los clientes!");
    };
    Cliente.find().then(onSuccess, onError);
};

service.saveAndUpdate = function(req, res) {
    console.log("######## DATOS RECIBIDOS ##########")
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.dni);
    console.log(req.body.telefono);
    console.log(req.body.email);
    console.log(req.body.direccion);
    console.log("------------------------------------")

    var data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        telefono: req.body.telefono,
        email: req.body.email,  
        direccion: req.body.direccion
    };

    if (req.params.id) {
        data._id = req.params.id;
    }

    var cliente = new Cliente(data);

    const onSuccess = (docs) => {
        res.send("Guardamos el cliente exitosamente!");
    };
    const onError = (err) => {
        console.log(String(err));
        res.send("Hubo un error al guardar el cliente!");
    };
    cliente.save().then(onSuccess, onError);
};

service.findOne = function(req, res) {
    const onSuccess = (doc) => {
        res.send(doc);
    };
    const onError = (err) => {
        console.log(String(err));
        res.send("Hubo un error al obtener el cliente con id: " + req.params.id);
    };
    Cliente.findById(req.params.id).then(onSuccess, onError);
};

service.delete = function(req, res) {
    const onSuccess = (doc) => {
        res.send("El cliente con id: " + req.params.id + " fue eliminado!");
    };
    const onError = (err) => {
        console.log(String(err));
        res.send("Hubo un error al eliminar el cliente con id: " + req.params.id);
    };
    Cliente.deleteOne(req.params.id).then(onSuccess, onError);
};

module.exports = service;