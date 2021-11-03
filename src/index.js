const express = require('express');
const cors = require('cors');
const routerAlumnos = require('./routes/alumnos');
// const routerErrores = require('./errores/errores');
const app = express();

app.use(cors({
  origin: ['https://irso-tallervi.herokuapp.com/alumnos']
}));

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
