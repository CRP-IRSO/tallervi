const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

// GET todos los alumnos
router.get('/alumnos', (req, res) => {

    console.log(req);
    var sizeQuery = _.size(req.query)
    var pathUrl = req.originalUrl;
    var queryUrl = pathUrl.replace("/alumnos?", "")
    console.log("la query es: " + queryUrl)
    var queryUrl = queryUrl.replace(/=/g, "='")
    queryUrl = queryUrl.replace(/&/g, "' AND ")

    console.log("primer: " + queryUrl)
    queryUrl = queryUrl + "'"

    console.log("segundo: " + queryUrl)

    if (sizeQuery === 0) {
        var sql = 'SELECT * FROM alumnos';
        connection.query(sql, (err, rows, fields) => {
            if(!err) {
                res.json({ alumnos: rows });
            } else {
                console.log(err);
            }
        });

    } else if(sizeQuery === 1) {
        var sql = 'SELECT * FROM alumnos WHERE ' + queryUrl ;
        console.log("la query es: " + sql)
        connection.query(sql, (err, rows, fields) => {
            if(!err) {
                res.json({ alumnos: rows });
            } else {
                console.log(err);
            }
        });
    } else if (sizeQuery === 2) {
        var sql = 'SELECT * FROM alumnos WHERE ' + queryUrl ;
        console.log("la query es: " + sql)
        console.log("el cod res: ")
        console.log(res.statusCode)
        connection.query(sql, (err, results, fields) => {

            if(!err) {
                res.json({ alumnos: results });
            } else {
                console.log("error");
                console.log(err.sqlMessage)
                console.log(err.sqlState)
                console.log("code")
                console.log(err.code)
                errores.error400(err, req, res)
            }
        });
    }
});


// GET Alumnos por id
router.get('/alumnos/:id', (req, res) => {
    console.log(req);
    validacion.validacionDataIds(req.params);


    const { id } = req.params;
    var sql = 'SELECT * FROM alumnos WHERE id = ?';

    connection.query(sql, [id], (err, rows, fields) => {
        if (!err && rows.length !== 0) {
            res.json(rows[0]);
        } else {
            errores.error404(req, res);
        }
    });
});


// DELETE Alumnos por id
router.delete('/alumnos/:id', (req, res) => {

    var nombres = nombretemp;
    integer {id} = idtemp;
    
    validacion.validacionDataIds(req.params);
    const { id } = req.params;
    var sql = 'DELETE FROM alumnos WHERE id = ?';

    connection.query(sql, [id], (err, rows, fields) => {
        console.log("el affectedRows es:");
        console.log(rows.affectedRows)
        if(!err) {
            res.json({id,nombres,direccion});
        } else {
            console.log(err)
        }
    });
});

// Insertar Alumno
router.post('/alumnos', (req, res) => {
    
    validacion.validacionDatosPOST(req.body);
    //const {nombres, apellido, direccion, cod_postal, telefono} = req.body;
    
    var nombres = req.body.nombres;
    var apellido = req.body.apellido;
    var direccion = req.body.direccion;
    var cod_postal = req.body.cod_postal;
    var telefono = req.body.telefono;
    var sql = 'INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono) '+
                'VALUES ( ?, ?, ?, ?, ? )';
    connection.query(sql, [nombres , apellido, direccion, cod_postal, telefono], (err, rows, fields) => {
        if(!err) {
            res.json({id,nombres});
        } else {
            console.log(err);
        }
    });
});

// Modificar Alumno
router.put('/alumnos/:id', (req, res) => {
    
    validacion.validacionDatosPUT(req.body);
    
    const { id } = req.params;
    var nombres = req.body.nombres;
    var apellido = req.body.apellido;
    var direccion = req.body.direccion;
    var cod_postal = req.body.cod_postal;
    var telefono = req.body.telefono;
    var sql = 'UPDATE alumnos SET nombres = ?, apellido = ?, direccion = ?, cod_postal = ?, telefono = ?'
                +' WHERE id = ?';
    connection.query(sql, [nombres , apellido, direccion, cod_postal, telefono, id], (err, rows, fields) => {
        if(!err) {
            res.json({id,nombres,apellido});
        } else {
            console.log(err);
        }
    });
});

router.get('*', (req, res) => { errores.error404(req, res) });
router.use((error, req, res, next) =>{errores.error400(error, req, res, next)});

module.exports = router;
