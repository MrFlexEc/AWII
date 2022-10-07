//Async/Await Busqueda de datos

//Importacion de los datos del archivo de datos
const {autos, mantenimientos} = require('./datos');
//Creacion de funcion Async para usar la propiedad await
async function buscarAutoPorId(id){
    //Creacion del objeto de clase auto para usar el metodo FIND
    const auto = autos.find((auto)=> auto.id===id);
    if (!auto) {
        //Creacion de error para controlar excepcion
        const error = new Error();
        error.message="Lo sentimos. No encontramos el auto";
        throw error;
    }
    //Retorno del objeto
    return auto;
}

async function buscarMantenimientoPorId(id) {
    //Creacion del objeto de clase MANTENIMIENTO para usar el metodo FIND
    const mantenimiento = mantenimientos.find((mantenimiento)=> mantenimiento.id===id);
    if (!mantenimiento) {
        //Creacion de error para controlar excepcion
        const error = new Error();
        error.message="Lo sentimos. No tenemos registro de este mantenimiento";
        throw error;
    }
    //Retorno del objeto
    return mantenimiento;
}

(async ()=>{
    try
    {
        //Creacion de objetos AUTO y MANTENIMIENTO con propiedad await para usar la funcion async
        const auto = await buscarAutoPorId(2);
        const mantenimiento = await buscarMantenimientoPorId(1);
        //Agregacion del objeto AUTO al objeto MANTENIMIENTO
        mantenimiento.idAuto=auto;
        //IMPRESION DE DATOS
        console.log("ID: " + mantenimiento.id + " \nAUTO: ", mantenimiento.idAuto, " | FECHA: " + mantenimiento.fechaMantenimiento + 
        " | DETALLE: " + mantenimiento.detalle);
    }
    catch (err)
    {
        //Excepcion controlada
        console.log(err.message)
    }
}
)();