const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

// Autenticación
/*router.post('/auth',(req, res) =>{

  const user = req.body.user;
  const pass = req.body.pass;

  if(user && pass){
    connection.query('SELLECT * FROM users WHERE user = ?', [user], (err, rows, fields) => {
      if(results.length === 0){
        res.send('Usuario o password incorrectos');
      } else {
        res.send('Login correcto');
      }
    })
  }
});*/

//router.get('*', (req, res) => { errores.error404(req, res) });
router.use((error, req, res, next) =>{errores.error400(error, req, res, next)});

module.exports = router;
