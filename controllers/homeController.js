let db = require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        ****************************
        Bienvenid@s a nuestra página
        ****************************
        Empresa lider en el mercado.

        ____________________________
        Nuestras sucursales: 
        `)
        db.forEach(sucursal => {
            res.write(`
            ${sucursal.sucursal}
            `)
        })
        res.end()
    }
}

