let { getAutos } = require('../data/dataBase')

let autosController = {
    listar: (req, res) => {
        res.render('autos', {
            autos: getAutos,
        })
    },   
    auto : (req, res) => {
        let auto = getAutos.find(auto => {
            return auto.id === +req.params.id 
        })
        res.render('autoDetail', {
            auto
        })   
    }
}

module.exports = autosController