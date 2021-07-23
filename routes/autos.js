let express = require('express');
let router = express.Router();

let controller = require('../controllers/autosController')

router.get('/', controller.index);
router.get('/:marca', controller.marca);
router.get('/:marca/:dato?', controller.dato);


module.exports = router;