let express = require('express');
let app = express();

/* Enrutadores */
let autosRouter = require('./routes/autos');
let homeRouter = require('./routes/home');
let sucursalesRouter = require('./routes/sucursales');
let adminRouter = require('./routes/admin');

/* Vistas */
app.set("view engine", "ejs");

/* Middlewares */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Rutas */
app.use('/', homeRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/autos', autosRouter);
app.use('/admin', adminRouter);


app.listen(3000, () => { console.log("Servidor levantado")})