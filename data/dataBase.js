let fs = require('fs');

let dbParseado = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

module.exports = dbParseado;