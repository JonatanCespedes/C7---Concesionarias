let express = require('express');
let router = express.Router();
let controller = require('../controllers/marcasController')

/* GET index marcas */
router.get('/', controller.index)


module.exports = router;