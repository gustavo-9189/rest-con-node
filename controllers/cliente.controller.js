const router = require('express').Router();
const service = require('../services/cliente.service');

router.route("")
    .get((req, res) => service.findAll(req, res))
    .post((req, res) => service.saveAndUpdate(req, res));

router.route("/:id")
    .get((req, res) => service.findOne(req, res))
    .put((req, res) => service.saveAndUpdate(req, res))
    .delete((req, res) => service.delete(req, res));

module.exports = router;