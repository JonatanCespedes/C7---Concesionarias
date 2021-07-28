let db = require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        res.render('home', {
            titulo: "Bienvenid@s a nuestro sitio",
            sucursales: db
        })
    }
}

