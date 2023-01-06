const mongoose = require("mongoose");

const dbConnection = async()=>{
    try {
        await mongoose.connect( process.env.MONGODB_CNN);
        console.log('Base de datos levantada')
    } catch (error) {
        console.log(error);
        throw new Error ('Error al conectarse a la base de datos');
    }
}

module.exports = {
    dbConnection
}