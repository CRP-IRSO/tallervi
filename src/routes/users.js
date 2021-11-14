const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

// GET todos los users
router.get('/users', (req, res) => {

    console.log(req);
    var sizeQuery = _.size(req.query)
    var pathUrl = req.originalUrl;
    var queryUrl = pathUrl.replace("/users?", "")
    console.log("la query es: " + queryUrl)
    var queryUrl = queryUrl.replace(/=/g, "='")
    queryUrl = queryUrl.replace(/&/g, "' AND ")

    console.log("primer: " + queryUrl)
    queryUrl = queryUrl + "'"

    console.log("segundo: " + queryUrl)

    if (sizeQuery === 0) {
        var sql = 'SELECT * FROM users';
        connection.query(sql, (err, rows, fields) => {
            if(!err) {
                res.json({ users: rows });
            } else {
                console.log(err);
            }
        });

    } else if(sizeQuery === 1) {
        var sql = 'SELECT * FROM users WHERE ' + queryUrl ;
        console.log("la query es: " + sql)
        connection.query(sql, (err, rows, fields) => {
            if(!err) {
                res.json({ users: rows });
            } else {
                console.log(err);
            }
        });
    } else if (sizeQuery === 2) {
        var sql = 'SELECT * FROM users WHERE ' + queryUrl ;
        console.log("la query es: " + sql)
        console.log("el cod res: ")
        console.log(res.statusCode)
        connection.query(sql, (err, results, fields) => {

            if(!err) {
                res.json({ users: results });
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

// GET Users por id
router.get('/users/:id', (req, res) => {
    console.log(req);
    //validacion.validacionDataIds(req.params);

    const { id } = req.params;
    var sql = 'SELECT * FROM users WHERE id = ?';

    connection.query(sql, [id], (err, rows, fields) => {
        if (!err && rows.length !== 0) {
            res.json(rows[0]);
        } else {
            errores.error404(req, res);
        }
    });
});

// Insertar User
router.post('/users', (req, res) => {

  //validacion.validacionDatosPOST(req.body);

  const user = req.body.user;
  const name = req.body.user;
  const pass = req.body.pass;
  var sql = 'INSERT INTO users (user, name, pass) '+
              'VALUES ( ?, ?, ? )';
  connection.query(sql, [user , name, pass], (err, rows, fields) => {
      if(!err) {
          res.status(201);
          res.json({status: "Usuario Registrado"});
      } else {
          console.log(err);
      }
  });

// Modificar User
router.put('/users/:id', (req, res) => {

      //validacion.validacionDatosPUT(req.body);

      const { id } = req.params;
      const user = req.body.user;
      const name = req.body.user;
      const pass = req.body.pass;
      var sql = 'UPDATE users SET user = ?, name = ?, pass = ?'
                  +' WHERE id = ?';
      connection.query(sql, [user, name, pass, id], (err, rows, fields) => {
          if(!err) {
              res.json({status: "Usuario Modificado"});
          } else {
              console.log(err);
          }
      });
  });

    module.exports = router;
