'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JornadaSchema = Schema({
    carrera: String,
    grado: String,
    jornada: String,
    seccion: String
})

module.exports = mongoose.model('Jornada', JornadaSchema);