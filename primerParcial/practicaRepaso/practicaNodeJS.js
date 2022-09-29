//Practica de mantenimientos de autos
/*
By: Lenny Bryan Alvarado Castro
*/

//Se crea un objeto del tipo DATE
const fecha = new Date();
//Creacion del objeto AUTO
const autos = {
    id: 1,
    descripcion: 'Nuevo',
    placa: 'MBF-1997',
    color: 'Amarillo',
}
//Creacion del objeto CONCEPTO
let concepto ={
    id: 1,
    descripcion: 'Cambio de aceite',
}
//Creacion del objeto MANTENIMIENTO
let mantenimiento = {
    id: 1,
    idVehiculo: 1,
    idConcepto: 1,
    fechaMantenimiento: fecha.getDate(),
    detalle: 'No se recibieron propinas'
}

//CREACION DE ARREGLOS
//ARREGLO DE AUTOS
const AUTOS = [
    {
        id: 2,
        descripcion: 'Nuevo',
        placa: 'MBC-1999',
        color: 'Rojo',
    },
    {
        id: 3,
        descripcion: 'Usado',
        placa: 'GFC-567',
        color: 'Plomo',
    },
    {
        id: 4,
        descripcion: 'Nuevo',
        placa: 'MBT-0098',
        color: 'Azul',
    },
    {
        id: 5,
        descripcion: 'Nuevo',
        placa: 'OBF-0876',
        color: 'Negro',
    },
    {
        id: 6,
        descripcion: 'Usado',
        placa: 'MBF-0999',
        color: 'Blanco',
    }
]
//ARREGLO DE CONCEPTOS
const CONCEPTOS = [
    {
        id: 2,
        descripcion: 'Cambio de aceite',
    }, 
    {
        id: 3,
        descripcion: 'Estabilizacion',
    }, 
    {
        id: 4,
        descripcion: 'Bujias',
    }, 
    {
        id: 5,
        descripcion: 'Estabilizacion de suspension',
    }, 
    {
        id: 6,
        descripcion: 'Cambio de neumaticos',
    }
]
//ARRAY DE MANTENIMIENTO
const MANTENIMIENTO = [
    {
        id: 2,
        idVehiculo: 2,
        idConcepto: 2,
        fechaMantenimiento: fecha.getDate(),
        detalle: 'No se recibieron propinas'
    }, 
    {
        id: 3,
        idVehiculo: 2,
        idConcepto: 3,
        fechaMantenimiento: fecha.getDate(),
        detalle: 'No se recibieron propinas'
    }, 
    {
        id: 4,
        idVehiculo: 5,
        idConcepto: 3,
        fechaMantenimiento: fecha.getDate(),
        detalle: 'No se recibieron propinas'
    }, 
    {
        id: 5,
        idVehiculo: 6,
        idConcepto: 1,
        fechaMantenimiento: fecha.getDate(),
        detalle: 'Propina de $1'
    }, 
    {
        id: 6,
        idVehiculo: 4,
        idConcepto: 5,
        fechaMantenimiento: fecha.getDate(),
        detalle: 'No se recibieron propinas'
    }
]

//MOSTRAR LOS DATOS DE LOS ARREGLOS

//Mostrar autos
console.log('DATOS ALMACENADOS DE LOS VEHICULOS DEL SISTEMA');
for (let i = 0; i < AUTOS.length; i++) {
    console.log(AUTOS[i]);
}
//Mostrar conceptos
console.log('---------------------------------------');
console.log('DATOS ALMACENADOS DE LOS CONCEPTOS');
for (let i = 0; i < CONCEPTOS.length; i++) {
    console.log(CONCEPTOS[i]);
}

//Mostrar MANTENIMIENTO
console.log('---------------------------------------');
console.log('DATOS ALMACENADOS DE LOS MANTENIMIENTOS REALIZADOS');
for (let i = 0; i < MANTENIMIENTO.length; i++) {
    console.log(MANTENIMIENTO[i]);
}