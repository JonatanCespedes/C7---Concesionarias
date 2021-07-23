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
    },
    marca: (req, res) => {
        let marcaParams = req.params.marca.trim();

        let filtradosPorMarca = [];

        autosController.autos().forEach(auto => {
            if(auto.marca.toLowerCase() === marcaParams.toLowerCase()){
                filtradosPorMarca.push(auto)
            }
        })

        res.send(filtradosPorMarca)
    },
    dato: (req, res) => {
        let datoParams = req.params.dato;
        switch (typeof datoParams) {
            case Number:
        }
    }
}

module.exports = autosController