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

        let arrayFiltrado = marcas.filter((x, i, a) => a.indexOf(x) == i)
        
        res.write(`
        Nuestras Marcas: 

        _______________

        `)
        arrayFiltrado.forEach(marca => {
            res.write(`
            ${marca.toUpperCase()}
            `)
        })
        res.end()
    },
    marca : (req, res) => {
        let marcaParams = req.params.marca.trim();

        let filtradosPorMarca = [];

        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                if(auto.marca.toLowerCase() === marcaParams.toLowerCase()){
                    filtradosPorMarca.push(auto)
                }
            })
        })

        res.send(filtradosPorMarca)
    }
}