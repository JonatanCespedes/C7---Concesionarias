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

        let { nombre, direccion, telefono} = req.body

        let nuevaSucursal = {
            id: lastId + 1,
            nombre: nombre.trim(),
            direccion: direccion.trim(),
            telefono: telefono.trim(),
            imagen: "default-image.png"
        }

        getSucursales.push(nuevaSucursal)

        addSucursal(getSucursales);

        res.redirect('/admin/sucursales')        
    },
    editForm: (req, res) => {
        let sucursal = getSucursales.find(sucursal => {
            return sucursal.id === +req.params.id
        })

        res.render('admin/editarSucursal', {
            sucursal
        })
    },
    editarSucursal: (req, res) => {
        let { nombre, direccion, telefono } = req.body;

        getSucursales.forEach(sucursal => {
            if(sucursal.id === +req.params.id){
                sucursal.id = sucursal.id,
                sucursal.nombre = nombre,
                sucursal.direccion = direccion,
                sucursal.telefono = telefono,
                sucursal.imagen = "sucursal.jpg"
            }
        })
    }
}