const {model, Schema} = require('mongoose');

const mantenimientoSchema = Schema({
    idVehiculo:{
        type: Number, 
        required: [true, 'El id del vehiculo es necesario'],
        unique: true
    }, 
    idConcepto:{
        type: Number,
        required: [true, 'El id del concepto es necesario'],
        unique:true
    }, 
    fechaMantenimiento:{
        type: String,
        required: [true, 'Se debe registrar fecha del mantenimiento']
    }, 
    detalle:{type:String}, 
    precio:{type:Number},
    status:{
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = model('Mantenimiento', mantenimientoSchema);