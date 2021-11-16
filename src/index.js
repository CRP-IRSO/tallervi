const express = require('express');
const routerAlumnos = require('./routes/alumnos');
const routerUsers = require('./routes/users');
const routerAuth = require('./routes/auth');
const cors = require('cors');

// const routerErrores = require('./errores/errores');
const app = express();
app.use(cors());
app.options('*', cors());

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

//app.use(routerErrores);

// Routes
app.use(routerAlumnos);
app.use(routerUsers);
//app.use(routerAuth);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
