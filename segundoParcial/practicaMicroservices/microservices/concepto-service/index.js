const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const appRoutes=require("./src/app")

const app=express()


app.use(express.json())
app.use("/api",appRoutes)

app.get("/",(req, res)=>{
res.send("Welcome to my app")
})


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_CNN)
.then(()=>console.log("conectado a mongodb"))
.catch((error)=>console.error(error))


app.listen(1000,(req,res)=>{
    console.log("listening on port 1000")
})