const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

// Autenticación
router.post('/auth', (req, res) => {

  const user = req.body.user;
  const pass = req.body.pass;
  var sql = 'SELLECT * FROM users WHERE user = ?';

   connection.query(sql, [user], (err, rows, fields) => {
    if(!err && rows.length !== 0) {
        res.json({status: 'Login correcto'});
      } else {
        res.sender({status: 'Usuario o password incorrectos'});
      }
      });

  /*if(user && pass){
    connection.query('SELLECT * FROM users WHERE user = ?', [user], (err, rows, fields) => {
      if(results.length === 0){
        res.json({status: 'Usuario o password incorrectos'});
      } else {
        res.json({status: 'Login correcto'});
      }
    }*/

});

//router.get('*', (req, res) => { errores.error404(req, res) });
//router.use((error, req, res, next) =>{errores.error400(error, req, res, next)});

module.exports = router;
