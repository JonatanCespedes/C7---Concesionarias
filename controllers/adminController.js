let db = require('../data/dataBase');


module.exports = {
    sucursales: (req, res) => {
        res.render('adminIndex', {
            db
        })
    },
    sucursal : (req, res) => {

    },
    formAgregarSucursal: (req, res) => {

    },
    agregarSucursal: (req, res) => {

    },
}