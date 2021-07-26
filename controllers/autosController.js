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
        let marcaParams = req.params.marca.trim();
        let datoParams = req.params.dato.trim();

        let filtradosPorMarca = [];

        autosController.autos().forEach(auto => {
            if(auto.marca.toLowerCase() === marcaParams.toLowerCase()){
                filtradosPorMarca.push(auto)
            }
        })

        let filtradosPorDato = filtradosPorMarca.filter(auto => {
            return auto.anio == datoParams || auto.color.toLowerCase() === datoParams.toLowerCase()
        })

        if(filtradosPorDato.length > 0){
            res.send(filtradosPorDato)
        }else {
            res.send("No hay datos que coincidan con tu busqueda")
        }
        
    }
}

module.exports = autosController