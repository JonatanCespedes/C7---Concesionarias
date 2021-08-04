let express = require('express');
let router = express.Router();
let { sucursal, sucursales, formAgregarSucursal, agregarSucursal } = require('../controllers/adminController')

/* GET index / Mostrar todas las sucursales */
router.get('/sucursales', sucursales)

/* GET :sucursal / Mostrar de la sucursal el listado de autos */
router.get('/sucursal/:id', sucursal) 

/* GET Formulario / Me muestra el formulario para Agregar sucursal */
router.get('/agregarSucursal', formAgregarSucursal);
/* POST Formulario / Captura los datos para Agregar sucursal */
router.post('/agregarSucursal', agregarSucursal);


module.exports = router;