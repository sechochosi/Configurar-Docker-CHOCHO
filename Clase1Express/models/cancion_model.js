var mongoose= require ('mongoose');
Schema= mongoose.Schema

var cancionSchema= new mongoose.Schema({
    nombre:{type:String},
    autor:{type:String},
    interprete:{type:String},
    genero:{type:String},
    duracion:{type:String},
    fotografia:{type:String},
    letra:{type:String},
    anio:{type:String},
});

var cancion = mongoose.model('cancion',cancionSchema);
module.exports=cancion;
