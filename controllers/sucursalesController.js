let db = require('../data/dataBase');


module.exports = {
    index : (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        ****************************
        -------- SUCURSALES --------
        ****************************
        Empresa lider en el mercado.

        ____________________________
        Nuestras sucursales: 
        `)
        db.forEach(element => {
            res.write(`

            ${element.sucursal}
            Teléfono: ${element.telefono}
            Dirección: ${element.direccion}

            _______________________________
            `)
        })
        res.end()
    },
    sucursal : (req, res) => {
        console.log(db)
        let paramsSucursal = req.params.sucursal.trim(); // Capturo el parametro de la ruta
        res.set({'content-type':'text/plain;charset=utf-8'}) //Seteo la codificacion del texto
        let sucursal = db.find(element => {
            return element.sucursal.toLowerCase() === paramsSucursal.toLowerCase()
        }) //Find me devuelte el objeto de la sucursal solicitada, si no lo encuentra devuelve undefiuned
        
        if(sucursal !== undefined){
            res.write(`
            ****************************
            -------- ${sucursal.sucursal.toUpperCase()} --------
            ****************************
            ____________________________
            ${sucursal.telefono}
    
            ${sucursal.direccion}
            `)
    
            res.write(`Cantidad de autos: ${sucursal.autos.length}
            Nuestros autos
            ______________
            `)

            sucursal.autos.forEach(auto => {
                res.write(` 
                Marca: ${auto.marca}
                Modelo: ${auto.modelo}
                Año: ${auto.anio}

                ___________________
                `)
            })
        }else{
            res.write(` La sucursal ${req.params.sucursal} no existe`)
        }
        res.end()
    }
}