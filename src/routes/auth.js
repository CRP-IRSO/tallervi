const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

// Autenticación
router.post('/auth', (req, res) => {

  var user = req.body.user;
  var pass = req.body.pass;
  var sql =

  if(user && pass){
    connection.query('SELLECT * FROM users WHERE user = ?', [user], (err, rows, fields) => {
      if(results.length === 0){
        res.json({status: 'Usuario o password incorrectos'});
      } else {
        res.json({status: 'Login correctoo'});
      }
    });
  }
});

//router.get('*', (req, res) => { errores.error404(req, res) });
//router.use((error, req, res, next) =>{errores.error400(error, req, res, next)});

module.exports = router;
