/**
 *  SERVICIO REST CON NODE.JS 
 *  By: Lenny Bryan Alvarado Castro
 *  Supervisor: John Cevallos
 *  Fecha: 25-oct-2022
 */

//Uso de la libreria Cors y Express para levantar un servidor local de trabajo para
//realizar las peticiones
const cors = require("cors");
const { response } = require("express");
const express = require("express");
//Inicializacion de la aplicacion EXPRESS y asignacion del numero de puerto a uasr en una varible
const app = express();
const PUERTO =  8080;
//Llamada a una estructura JSON de express para manejar rutas
app.use(cors()).use(express.json());
app.use('/public', express.static(__dirname+'/public'));
//Inicializacion de un arreglo que sera para almacenar los datos
let autos = [];
//METODO GET DEL SERVICIO REST
app.get('/', (req, res)=>{
    res.status(200).send(
        //Devolucion del arreglos para ver todos los elementos
        autos
    )
})
//METODO POST DEL SERVICIO REST
app.post('/', (req,res)=>{
    //Recoge los datos a ingresar dentro del arreglo
    const {body} = req;
    //Ingreso de datos al arreglo
    autos.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response:body
    })
})
//METODO PUT DEL SERVICIO REST
app.put('/', (req,res)=>{
    //DIVIDE TODOS LOS POSIBLES DATOS QUE CONTENGA EL BODY
    const {id, descripcion, placa, color, fabricante, tipo, anio, clasificacion}= req.body;
    //Verificacion si existe el dato con el ID
    let auto = autos.filter(p=> p.id === id)[0];
    //Imprime los datos del arreglo
    console.log(autos); 
    //Asignacion de las variables
    auto.descripcion = descripcion; auto.placa=placa; auto.color=color; auto.fabricante = fabricante; 
    auto.tipo=tipo; auto.anio=anio; auto.clasificacion=clasificacion;
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response:auto
        }
    )
})
//METODO DELETE DEL SERVICIO REST
app.delete('/:id', (req, res)=>{
    //RECOGE EL ID DEL DATO
    const {id} = req.params;
    //COMPRUEBA SI EL DATO EXISTE
    autos = autos.filter(p => p.id != id);
    res.status(200).send({
        response:"Se elimino el resultado el auto con éxito"
    })
})
//METODO LISTEN PARA INDICAR EN QUE PUERTO QUEREMOS EJECUTAR NUESTRO SERVIDOR EXPRESS
app.listen(PUERTO,()=>{
    console.log(`Servidor corriendo, accede a http:localhost:${PUERTO}`);
})