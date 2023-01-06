const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const pacienteRoutes=require("./src/app");

const app=express();

app.use(express.json());
app.use("/api", pacienteRoutes);



app.get("/", (req, res)=>{
    res.send("welcome to my app")
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("conectado a mongodb"))
.catch((error)=>console.log(error));


app.listen(1000,()=>{
    console.log("listening on port 1000")
});