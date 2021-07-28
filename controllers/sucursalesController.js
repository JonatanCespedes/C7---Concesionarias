let db = require('../data/dataBase');


module.exports = {
    sucursal : (req, res) => {
        let paramsSucursal = req.params.sucursal.trim(); // Capturo el parametro de la ruta
        
        let sucursal = db.find(element => {
            return element.sucursal.toLowerCase() === paramsSucursal.toLowerCase()
        }) //Find me devuelte el objeto de la sucursal solicitada, si no lo encuentra devuelve undefiuned
        
        if(sucursal !== undefined){
            res.render('sucursal', {
                sucursal
            })
        }else{
            
        }
    }
}