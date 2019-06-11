'use strict'

var express = require('express');
var JornadaController = require('../controllers/jornada');

var api = express.Router();

api.get('/prueba-controlador', JornadaController.pruebaJornada);
api.post('/save-jornada', JornadaController.saveJornada);
api.get('/list-jornada', JornadaController.listJornada);

module.exports = api;