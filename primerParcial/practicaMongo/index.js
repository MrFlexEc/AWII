//Importacion de la libreria mongoose
const mongoose = require('mongoose');
//creacion de variable para la conexion con la base de datos MongoDB
const connectionURL = "mongodb+srv://admin:root@cluster0.hobrkqe.mongodb.net/prueba";

//Uso de un metodo Async
(async ()=>{
//sentencia Try Catch para controlar excepciones
try {
    //Conexion con la base de datos
    const StateConnection = await mongoose.connect(connectionURL);
    //Creacion de modelos basandonos en nuestras identidades asignadas
    const auto =  mongoose.model('auto', {descripcion:String, placa:String, color:String, fabricante: String, tipo: String, 
        anio:String, clasificacion: String});
    const concepto =  mongoose.model('concepto', {descripcion: String});
    const mantenimiento = mongoose.model('mantenimiento', {
        //Uso de los atributos tipo objetos
        idAuto: {type: mongoose.Types.ObjectId, ref:"auto"},
        idConcepto: {type:mongoose.Types.ObjectId, ref:"mantenimiento"},
        fechaMantenimiento:String, detalle:String, precio:Number
    });

    //Creacion e ingreso en la base de datos de 3 objetos de tipo AUTO
    const autoUno = new auto({descripcion:"Nuevo", placa:"MBF-0988", color: "Negro", fabricante:"Mazda", tipo:"Combustible", anio:"2022", clasificacion:"Sedan"});
    const guardarAutoUno = await autoUno.save();
    const autoDos = new auto({descripcion:"Usado", placa:"GYE-078", color: "Verde", fabricante:"Suzuki", tipo:"Combustible", anio:"1998", clasificacion:"Hatchback"});
    const guardarAutoDos = await autoDos.save();
    const autoTres = new auto({descripcion:"Nuevo", placa:"PFQ-2034", color: "Blanco", fabricante:"Tesla", tipo:"Electrico", anio:"2021", clasificacion:"Sedan"});
    const guardarAutoTres = await autoTres.save();
    //Creacion e ingreso en la base de datos de 2 objetos de tipo CONCEPTO
    const conceptoUno = new concepto({descripcion:"Cambio de aceite"});
    const saveConceptoUno = await conceptoUno.save();
    const conceptoDos =  new concepto({descripcion:"Revision de frenos"});
    const saveConceptoDos = await conceptoDos.save();
    const conceptoTres =  new concepto({descripcion:"Cambio de neumáticos"});
    const saveConceptoTres = await conceptoTres.save();
    //Creacion e ingreso en la base de datos de 2 objetos de tipo MANTENIMIENTO
    const mantenimientoUno = new mantenimiento({
        //Sintaxis para referenciar a un objeto
        idAuto: guardarAutoUno._id,
        idConcepto: saveConceptoTres._id,
        fechaMantenimiento: "03/11/2022", detalle:"El vehiculo tiene una llanta pinchada", precio: 5.65
    });
    const saveMantenimientoUno = await mantenimientoUno.save();

    const mantenimientoDos = new mantenimiento({
        idAuto: guardarAutoDos._id,
        idConcepto: saveConceptoUno._id,
        fechaMantenimiento: "10/11/2022", detalle:"El vehiculo acudio por un cambio de aceite", precio: 5.00
    });
    const saveMantenimientoDos = await mantenimientoDos.save();

    //IMPRESION DE LOS DATOS RECIEN INGRESADOS CON  USO DE ESTRUCTURAS REPETITIVAS
    console.log("DATOS REGISTRADOS CORRECTAMENTE \nImpriendo datos...");
    console.log("REGISTRO DE AUTOS");
    const registroAutos = await auto.find();
    for (let i = 0; i < registroAutos.length; i++) {
        console.log("ID: " + registroAutos[i]._id + " | Descripcion: " + registroAutos[i].descripcion + " | Placa: " + registroAutos[i].placa +
        "\n | Color: " + registroAutos[i].color + " | Fabricante: " + registroAutos[i].fabricante + " | Tipo: " + registroAutos[i].tipo +
        "\n | Año: " + registroAutos[i].anio + " | Clasificacion: " + registroAutos[i].clasificacion);
    }
    console.log("------------------------------------------------------------------------------------------------");
    console.log("REGISTRO DE CONCEPTOS");
    const registroConceptos = await concepto.find();
    for (let j = 0; j < registroConceptos.length; j++) {
        console.log("ID: " + registroConceptos[j]._id + " | Descripcion: " + registroConceptos[j].descripcion);
    }
    console.log("------------------------------------------------------------------------------------------------");
    console.log("REGISTRO DE MANTENIMIENTOS");
    const registroMantenimientos = await mantenimiento.find();
    for (let l = 0; l < registroMantenimientos.length; l++) {
        console.log("ID: " + registroMantenimientos[l]._id + " | ID auto: " + registroMantenimientos[l].idAuto + " | ID concepto: " + 
        registroMantenimientos[l].idConcepto + " | Fecha de mantenimiento: " + registroMantenimientos[l].fechaMantenimiento + " | Precio: " + registroMantenimientos[l].precio);
    }
    console.log("------------------------------------------------------------------------------------------------");

    //ACTUALIZACION DE CIERTOS DATOS ESPECIFICOS
    //Uso del metodo UPDATE ONE para actualizar un unico dato de una colección en la base de datos
    const updateAutoUno = await guardarAutoUno.updateOne({
        color: "verde"
    });
    const updateMantenimientoDos = await saveMantenimientoDos.updateOne({
        precio: 7.00
    });

    //IMPRESION DE LOS DATOS ACTUALIZADOS
    console.log("\n\nSE HA RECIBIDO UNA ACTUALIZACION DE DATOS");
    console.log("IMPRIENDO DATOS ACTUALIZADOS...");     
    console.log("REGISTRO ACTUALIZADO DE AUTOS");
    const registroActualizadoAutos = await auto.find();
    for (let i = 0; i < registroActualizadoAutos.length; i++) {
        console.log("ID: " + registroActualizadoAutos[i]._id + " | Descripcion: " + registroActualizadoAutos[i].descripcion + " | Placa: " + registroActualizadoAutos[i].placa +
        "\n | Color: " + registroActualizadoAutos[i].color + " | Fabricante: " + registroActualizadoAutos[i].fabricante + " | Tipo: " + registroActualizadoAutos[i].tipo +
        "\n | Año: " + registroActualizadoAutos[i].anio + " | Clasificacion: " + registroActualizadoAutos[i].clasificacion);
    }
    console.log("REGISTRO ACTUALIZADO DE MANTENIMIENTOS");
    const registroActualizadoMantenimiento = await mantenimiento.find();
    for (let l = 0; l < registroMantenimientos.length; l++) {
        console.log("ID: " + registroActualizadoMantenimiento[l]._id + " | ID auto: " + registroActualizadoMantenimiento[l].idAuto + " | ID concepto: " + 
        registroActualizadoMantenimiento[l].idConcepto + " | Fecha de mantenimiento: " + registroActualizadoMantenimiento[l].fechaMantenimiento + " | Precio: " + registroActualizadoMantenimiento[l].precio);
    }

    //BORRAR DE DATOS ESPECIFICOS 
    console.log("Borrar auto tres");
    //Uso del metodo DELETE ONE para borrar un unico elemento de la colección de la base de datos, que coincida con los paramnetros
    //especificados en los parametros
    const deleteAuto =  await auto.deleteOne({placa:"PFQ-2034"});
    console.log("Dato borrado exitosamente");
    const registroNuevoAutos = await auto.find();
    //Impresion de la nueva coleccion
    console.log(registroNuevoAutos);

    console.log("Borrar concepto dos")
    const deleteConcepto = await concepto.deleteOne({descripcion: "Revision de frenos"});
    console.log("Dato borrado correctamente");
    const registroNuevoConceptos = await concepto.find();
    console.log(registroNuevoConceptos);

} catch (error) {
    //Mensaje de la excepcion
    console.log(error.message);
}
})();