const mongoose = require("mongoose");

const mantenimientoScchema = mongoose.Schema({
    idAuto: {type: String},
    idConcepto : {type:String},
    fechaMantenimiento: {type: String},
    detalle : {type: String},
    precio : {type: Number}
})

module.exports = mongoose.model('Mantenimiento', mantenimientoScchema);