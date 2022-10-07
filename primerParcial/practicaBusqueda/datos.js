//Arreglos con 5 objetos//

//Arreglos de los datos de autos
const autos= [
    {
        id:1, descripcion:'Usado', placa:'MBF-1907', Color:'Negro'
    },
    {
        id:2, descripcion:'Nuevo', placa:'OBF-0897', Color:'Blanco'
    },
    {
        id:3, descripcion:'Usado', placa:'MBA-107', Color:'Verde'
    },
    {
        id:4, descripcion:'Semi-nuevo', placa:'MBC-0097', Color:'Rojo'
    },
    {
        id:5, descripcion:'Usado', placa:'GOU-098', Color:'Azul'
    },
    {
        id:6, descripcion:'Nuevo', placa:'MBG-0965', Color:'Negro'
    }
];
//Arreglos de datos de mantenimiento
const mantenimientos=[
    {
        id:1, idAuto:2, fechaMantenimiento:"03-feb-2022", detalle:"Costo de $10"
    },{
        id:2, idAuto:1, fechaMantenimiento:"10-07-2022", detalle:"Costo de $15"
    },{
        id:3, idAuto:3, fechaMantenimiento:"05-06-2022", detalle:"Costo de $35"
    },{
        id:4, idAuto:1, fechaMantenimiento:"30-12-2021", detalle:"Costo de $50"
    },{
        id:5, idAuto:4, fechaMantenimiento:"10-11-2021", detalle:"Costo de $10"
    },{
        id:6, idAuto:6, fechaMantenimiento:"07-10-2022", detalle:"Costo de $30"
    },{
        id:7, idAuto:5, fechaMantenimiento:"18-04-2022", detalle:"Costo de $10"
    }
];

//Exportación de los arreglos
module.exports= {autos,mantenimientos};
