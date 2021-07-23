let express = require('express');
let router = express.Router();
let controller = require('../controllers/marcasController')

/* GET index marcas */
router.get('/', controller.index);
router.get('/:marca', controller.marca)


module.exports = router;