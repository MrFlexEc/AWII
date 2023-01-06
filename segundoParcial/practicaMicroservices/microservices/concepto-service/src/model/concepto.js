const mongoose = require("mongoose");

const conceptoSchema = mongoose.Schema({
    descripcion:{type:String, required:true}
})

module.exports = mongoose.model("Conceptos", conceptoSchema);