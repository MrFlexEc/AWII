const autoSchema = require("./model/auto")
const express = require("express");
const auto = require("./model/auto");
const router = express.Router()

router.get("/autos", (req, res)=> {
    autoSchema.find().then((data)=>res.send(data)).catch((error)=> res.send({message:error}))
})

router.post("/autos", (req,res)=>{
    const autos = autoSchema(req.body)
    autos.save().then((data)=> res.send(data)).catch((error)=> res.send({message:error}))
})

router.get("/autos/:id", (req,res)=>{
    const {id} = req.params
    autoSchema.findById(id).then((data)=> res.send(data)).catch((error)=> res.send({message:error}))
})

router.put("/autos/:id",(req,res)=>{
    const {id}=req.params
    const {descripcion, placa, color, fabricante, tipo, anio, clasificacion} = req.body
    autoSchema.updateOne({_id:id}, {$set: {descripcion, placa, color, fabricante,tipo,anio,clasificacion}})
    .then((data)=>res.send(data)).catch((error)=> res.send({message:error}))
})

router.delete("/autos/:id", (req,res)=>{
    const {id} = req.params
    autoSchema.deleteOne({_id:id}).then((data)=>res.send(data)).catch((error)=>res.send({message:error}))
})

module.exports= router;