const express = require('express');
const routerAlumnos = require('./routes/alumnos');+

// const routerErrores = require('./errores/errores');
const app = express()

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
//app.use(routerErrores);

// Routes
app.use(routerAlumnos);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
