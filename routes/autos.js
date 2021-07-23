let express = require('express');
let router = express.Router();

let controller = require('../controllers/autosController')

router.get('/', controller.index);


module.exports = router;