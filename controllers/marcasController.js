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

        let arrayFiltrado = marcas.filter((auto, index, array) => array.indexOf(auto) == index)
        
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

       /*  index: (req, res) =>{
            res.set({'content-type':'text/plain;charset=utf-8'})
            let marcas =[]
            db.forEach((sucursal) => {
                sucursal.autos.forEach((auto) => {
                    if(!marcas.includes(auto.marca)){
                        marcas.push(auto.marca)
                    }
                })
            })
            res.write(`Estas son las marcas que nos acompañan:\n`)
            res.write(`*****************************`)
            marcas.forEach((marcas) => {
                res.write(`
                ----${marcas}----
                `)
            })
            res.write(`
            *****************************`)
            res.end();
        }, */
    
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