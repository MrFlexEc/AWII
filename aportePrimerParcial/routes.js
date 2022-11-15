const express = require("express");

const router = express.Router();
const userSchema = require("./schema")
router.post("/mantenimiento", (req,res) =>  {
    const mantenimiento = userSchema(req.body);
    mantenimiento.save().then((data) => res.json(data)).catch((error)=>res.json({message: error}));
})


router.delete("/mantenimiento/:idAuto", (req, res) => {
    const {idAuto} = req.params;
    userSchema
    .remove({_idAuto: idAuto})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
})

module.exports = router;