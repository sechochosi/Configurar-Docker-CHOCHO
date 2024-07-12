//modelo para MYSQL

var MYSQL = require({mysql});
Schema = MYSQL.Schema;

var cancion = new MYSQL.Schema({
    nombre:{type:String},
    autor:{type:String},
    interprete:{type:String},
    genero:{type:String},
    duracion:{type:String},
    fotografia:{type:String},
    letra:{type:String},
    anio:{type:String},
});

var cancionm = MYSQL.model('cancionm', cancion);
module.exports=cancionm;