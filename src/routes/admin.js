let express = require('express');
let router = express.Router();
let { sucursal, 
    sucursales, 
    formAgregarSucursal, 
    agregarSucursal, 
    index,
    editForm,
    editarSucursal,
    borrarSucursal } = require('../controllers/adminController');
let uploadFile = require('../middlewares/uploadFiles');

/* GET Index / Index del admin */
router.get('/', index)

/* GET Sucursales / Mostrar todas las sucursales */
router.get('/sucursales', sucursales)

/* GET :sucursal / Mostrar de la sucursal el listado de autos */
router.get('/sucursal/:id', sucursal) 

/* GET Formulario / Me muestra el formulario para Agregar sucursal */
router.get('/agregarSucursal', formAgregarSucursal);
/* POST Formulario / Captura los datos para Agregar sucursal */
router.post('/agregarSucursal', uploadFile.single('image'),agregarSucursal);

/* GET - Muestra formulario de edicion */
router.get('/editarSucursal/:id', editForm);
/* PUT - Recibe los datos de edicion */
router.put('/editarSucursal/:id', editarSucursal);

/* DELETE - Borra una sucursal */
router.delete('/eliminarSucursal/:id', borrarSucursal)

module.exports = router;