
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const app = express();
const PUERTO =  process.env.PORT || 9000;
const userRoutes = require("./routes");

app.use(express.json());
app.use('/api', userRoutes);

app.get("/", (req, res) =>{
    res.send("Welcome to my API");
})

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('Conectado a MongoDB ATLAS'))
.catch((error)=> console.log(error))

app.listen(PUERTO,()=>{
    console.log(`Servidor corriendo, accede a http:localhost:${PUERTO}`);
})