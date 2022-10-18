//Elemento require para llamar a las diferentes librerias que vamos a usar mediante una constante
const path = require("path");
const express = require("express");
const cors = require("cors");
//Creacion de una constante para asignar el puerto que vamos a usar como servidor local
const PUERTO = 8080;
//Instancia de las rutas de los archivos con el uso de la libreria PATH
const urlAutos = path.join(__dirname, "./autos.html");
const urlConceptos = path.join(__dirname,"./conceptos.html");
const urlMantenimiento = path.join(__dirname, "./mantenimiento.html");
const urlError = path.join(__dirname,"./error.html");
//Inicializamos el microservicio EXPRESS
const server = express();
//Levantamos el servicio EXPRESS
server.use(cors()).use(express.json());
//Asignacion de una pagina por defecto al acceder al servidor
server.get('/', functionIndex);
//Creacion de solicitudes del tipo GET para mostrar las diferentes paginas asignadas
server.get('/autos', (req, res)=>{
    //Status 200 representa que se encontro el elemento haciendo referencia al elemento solicitado
    res.status(200).sendFile(urlAutos);
})

server.get('/conceptos', (req, res)=>{
    res.status(200).sendFile(urlConceptos);
})

server.get('/mantenimiento', (req, res)=>{
    res.status(200).sendFile(urlMantenimiento);
})
//Creacion de metodo cuando el elemento solicitado no se encuentra
server.use((req,res, next)=>{
    res.status(400).sendFile(urlError);
})
//Creacion de la funcion index para mostrar por defecto la pagina de AUTOS
function functionIndex (req, res){
    res.status(200).sendFile(urlAutos);
}
//Indicacion del puerto donde vamos a levantar el servidor
server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})