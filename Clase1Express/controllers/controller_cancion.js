var cancion = require('../models/cancion_model'),
            express=require('express'),
            router=express.Router();

router.post('/crear',(req,res)=>{
   var body= req.body;
   console.log("llego hasta aqui");
   cancion.insertMany({
        nombre:body.nombre,
        autor:body.autor,
        interprete:body.interprete,
        anio:body.anio,
        letra:body.letra,
        duracion:body.duracion,
        genero:body.genero,
   },).then(function () {
        res.status(200).json("Datos Guardados")
        console.log("Succesfully saved default items to DB");
    })
    .catch(function (err) {
        console.log(err);
        throw err;
    });;
});

module.exports=router;