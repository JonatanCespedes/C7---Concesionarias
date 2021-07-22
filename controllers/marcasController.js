let db = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})

        let marcas = []
       
        db.forEach(sucursal => {
           sucursal.autos.forEach(auto => {
               marcas.push(auto.marca)
           })
        });
        console.log(marcas)
        res.end()
    }
}