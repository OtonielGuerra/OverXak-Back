'use strict'

var Jornada = require('../models/jornada');

function pruebaJornada(req, res){
    res.status(200).send({message: 'Jornada está corriendo'});
}

function saveJornada(req, res){
    var jornada = new Jornada();
    var params = req.body;

    if(params.carrera && params.grado && params.jornada && params.seccion){
        
        jornada.carrera = params.carrera.toUpperCase();
        jornada.grado = params.grado.toUpperCase();
        jornada.jornada = params.jornada.toUpperCase();
        jornada.seccion = params.seccion.toUpperCase();

        Jornada.findOne({$and: [{carrera: params.carrera.toUpperCase()}, {grado: params.grado.toUpperCase()}, 
            {jornada: params.jornada.toUpperCase()}, {seccion: params.seccion.toUpperCase()}]}, (err, ok) => {
            if(err){
                res.status(200).send({err});
            }else{
                if(!ok){
                    jornada.save((err, jornadaSave) => {
                        if(err){
                            console.log(err);
                            res.status(500).send({ message: 'Red no guardada' });
                        } 
                        else{
                            res.status(200).send({jornadaSave})
                        }
                    })
                }else{
                    res.status(200).send({message: 'No se puede duplicar'});
                }
            }
        })
    }else{
        res.status(200).send({message: 'Ingrese todos los datos correctos'});
    }
}

function listJornada(req, res){
    Jornada.find({}, (err, todasLasJornadas)=>{
        if(err){
            res.status(500).send({message: 'Error al traer los datos'});
        }else{
            res.status(200).send({todasLasJornadas});
        }
    });
}



module.exports = {
    pruebaJornada,
    saveJornada,
    listJornada
}