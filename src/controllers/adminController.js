let { getSucursales, getAutos, addSucursal} = require('../data/dataBase');


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
        res.render('admin/agregarSucursal')
    },
    agregarSucursal: (req, res) => {
        let lastId = 1;

        getSucursales.forEach(sucursal => {
            if(sucursal.id > lastId){
                lastId = sucursal.id
            }
        })

        let nuevaSucursal = {
            id: lastId + 1,
            nombre: req.body.nombre.trim(),
            direccion: req.body.direccion.trim(),
            telefono: req.body.telefono.trim(),
            imagen: "default-image.png"
        }

        getSucursales.push(nuevaSucursal)

        addSucursal(getSucursales);

        res.redirect('/admin/sucursales')        
    },
}