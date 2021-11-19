const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

// Autenticación
router.post('/auth', (req, res) => {

//validacion.validacionUserPOST(req.params);

  const user = req.body.user;
  const pass = req.body.password;
  var sql = 'SELECT * FROM users WHERE user = ? AND pass = ?';
console.log(pass);
   connection.query(sql, [user, pass], (err, rows, fields) => {
    if(!err && rows.length !== 0) {
        res.json({status: 'Login correcto'});
      } else {
        console.log(err)
        res.json({status: 'Usuario o password incorrectos'});
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
