let express = require('express');
let app = express();

/* Enrutadores */
let autosRouter = require('./routes/autos');
let homeRouter = require('./routes/home');
let marcasRouter = require('./routes/marcas');
let sucursalesRouter = require('./routes/sucursales');

/* Vistas */
app.set("view engine", "ejs");

app.use(express.static('public'))

/* Rutas */
app.use('/', homeRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/marcas', marcasRouter);
app.use('/autos', autosRouter);


app.listen(3000, () => { console.log("Servidor levantado")})