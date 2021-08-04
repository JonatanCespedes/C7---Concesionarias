let { getSucursales, getAutos} = require('../data/dataBase');


module.exports = {
    index : (req, res) => {
        res.render('admin/adminIndex.ejs')
    },
    sucursales: (req, res) => {

        res.render('admin/adminSucursales', {
            sucursales: getSucursales,
            autos: function (idSucursal) {
                return getAutos.filter(auto => {
                    return auto.sucursal === idSucursal
                })
            }
        })
    },
    sucursal : (req, res) => {

    },
    formAgregarSucursal: (req, res) => {

    },
    agregarSucursal: (req, res) => {

    },
}