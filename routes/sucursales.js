let express = require('express');
let router = express.Router();

let controller = require('../controllers/sucursalesController')

/* GET Sucursal */
router.get('/:sucursal', controller.sucursal)


module.exports = router;