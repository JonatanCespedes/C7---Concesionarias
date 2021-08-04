let express = require('express');
let router = express.Router();

let controller = require('../controllers/sucursalesController')

/* GET Sucursal */
router.get('/:IDsucursal', controller.sucursal)

module.exports = router;