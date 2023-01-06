const mongoose = require("mongoose");

const autoSchema = mongoose.Schema({
    descripcion:{ type: String, required:true},
    placa:{type: String, required:true},
    color:{type: String, required:true},
    fabricante:{type: String, required:true},
    tipo:{type: String},
    anio:{type: Number},
    clasificacion:{type: String}
})

module.exports = mongoose.model("Autos", autoSchema);