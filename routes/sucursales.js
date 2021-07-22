let express = require('express');
let router = express.Router();

let controller = require('../controllers/sucursalesController')

/* GET Main sucursales */
router.get('/', controller.index)

/* GET Sucursal */
router.get('/:sucursal', controller.sucursal)


module.exports = router;