let { getSucursales, getAutos } = require('../data/dataBase')


module.exports = {
    sucursal : (req, res) => {
        let id_sucursal = req.params.IDsucursal.trim(); // Capturo el parametro de la ruta
        
        let sucursal = getSucursales.find(element => {
            return element.id === +id_sucursal
        }) 
        
        let autos = getAutos.filter(auto => {
            return auto.sucursal === +id_sucursal
        })
        
        res.render('sucursal', {
            sucursal,
            autos
        })
        
    }
}