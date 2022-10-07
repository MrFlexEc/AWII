//Promise busqueda de datos

//Importacion de los arreglos del archivos de datos
const {autos, mantenimientos} = require('./datos');
//Creacion de PROMISE para buscar los mantenimientos registrados en los datos
function buscarMantenimiento(id) {
    //Uso de funcion tipo PROMISE con dos parametros: Resolve y Reject
    return new Promise((resolve,reject)=>{
        //Creacion de objeto de tipo mantenimiento para capturar los datos con la funcion FIND
        const mantenimiento = mantenimientos.find((mantenimiento)=> mantenimiento.id===id);
        if (!mantenimiento) {
            //Creacion de variable de tipo error para controlar excepcion
            const error = new Error();
            error.message="Lo sentimos, no encontramos registro de este mantenimiento";
            //Devolucion del error como tipo ACCION RECHAZADA
            reject(error);
        }
        //Devolucion del objeto encontrado como tipo ACCION REALIZADA o RESUELTA 
        resolve(mantenimiento);
    })
}


function buscarAutoPorId(id) {
    //Uso de funcion tipo PROMISE con dos parametros: Resolve y Reject
    return new Promise((resolve,reject)=>{
        //Creacion de objeto de tipo auto para capturar los datos con la funcion FIND
        const auto = autos.find((auto)=>{
            //Retorno solamente del id del auto
            return auto.id===id;
        });
        if (!auto) {
            const error = new Error();
            error.message="Lo sentimos, no pudimos encontrar este auto";
            //Devolucion del error como tipo ACCION RECHAZADA
            reject(error);
        }
        //Devolucion del objeto encontrado como tipo ACCION REALIZADA o RESUELTA 
        resolve(auto);
    })
}

//Uso de la funcion PROMISE para buscar un mantenimiento registrado
buscarMantenimiento(1).then((mantenimiento)=>{
    console.log(mantenimiento);
    return buscarAutoPorId(mantenimiento.idAuto);
})
.then((auto)=>{
    console.log(auto)
}).catch((error)=>{
    console.log(error.message);
})