const express = require('express');
const app = express();
const connection= require ('./Database.connection');
const port  = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
connection.sync()
.then(()=>{
    console.log('Base de datos sincronizada');
    app.listen(port,()=>{
        console.log("La aplicacion corre en el puerto: "+port)
    });
})
.catch((error)=>{
    console.error('Error al sincronizar la base de datos',error)
});