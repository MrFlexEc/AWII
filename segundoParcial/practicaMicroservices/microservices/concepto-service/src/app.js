const express = require("express");
const conceptoSchema = require("./model/concepto")
const router = express.Router();

router.get("/conceptos",(req, res)=>{
    conceptoSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})

router.post("/conceptos",(req,res)=>{
    const plato=conceptoSchema(req.body)
    plato.save()
    .then(()=>res.send("plato creado con éxito"))
    .catch((error)=>res.send({message:error}))
})


router.get("/conceptos/:id", (req, res)=>{
const {id}=req.params
conceptoSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


router.put("/conceptos/:id",(req, res)=>{
const {id}=req.params
const {descripcion}=req.body
conceptoSchema.updateOne({_id: id}, {$set: {descripcion}})
.then((data)=>res.send(data))
.catch((error)=> res.send({message:error}))
})


router.delete("/conceptos/:id",(req, res)=>{
    const {id}=req.params
    conceptoSchema.deleteOne({_id:id})
    .then((data)=>res.send(data))
    .catch((error)=>res.send(error))
    })


module.exports=router