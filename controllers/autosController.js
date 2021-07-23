let db = require('../data/dataBase');

let autosController = {
    autos: () => {
        let autos = []

        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                autos.push(auto)
            })
        });
        return autos
    },
    index: function(req, res) {
        res.send(autosController.autos())
    }
}

module.exports = autosController