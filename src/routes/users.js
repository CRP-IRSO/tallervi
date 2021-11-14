const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

router.post('/users', (req, res) => {

  //validacion.validacionDatosPOST(req.body);
  
  const user = req.body.user;
  const name = req.body.user;
  const pass = req.body.pass;
  var sql = 'INSERT INTO users (nombres, apellido, direccion, cod_postal, telefono) '+
              'VALUES ( ?, ?, ?, ?, ? )';
  connection.query(sql, [nombres , apellido, direccion, cod_postal, telefono], (err, rows, fields) => {
      if(!err) {
          res.status(201);
          res.json({status: "Usuario Registrado"});
      } else {
          console.log(err);
      }
  });

router.put('/users/:id', (req, res) => {

      //validacion.validacionDatosPUT(req.body);

      const { id } = req.params;
      const user = req.body.user;
      const name = req.body.user;
      const pass = req.body.pass;
      var sql = 'UPDATE users SET nombres = ?, apellido = ?, direccion = ?, cod_postal = ?, telefono = ?'
                  +' WHERE id = ?';
      connection.query(sql, [nombres , apellido, direccion, cod_postal, telefono, id], (err, rows, fields) => {
          if(!err) {
              res.json({status: "Usuario Modificado"});
          } else {
              console.log(err);
          }
      });
  });
