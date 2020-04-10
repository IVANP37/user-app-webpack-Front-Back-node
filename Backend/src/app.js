const express = require ('express');
const app = express();
const morgan = require('morgan');
const cors = require ('cors');

app.use(morgan('dev'));
app.use(cors());// Modulo que me permite comunicarme con otros mulos en mi app

//RUTAS
app.use(require('./routes/user'))


module.exports=app;