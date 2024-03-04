require('./Database/sync.js');
const express = require('express');
const connection= require ('./Database/connection.js');
const app = express();
const port  = process.env.PORT || 1337;

const restaurantrouter=require('./Routers/restaurantrouter.js');
const productrouter=require('./Routers/productrouter.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force:false})
.then(()=>{
    console.log('Base de datos sincronizada');
    app.listen(port,()=>{
        console.log('La aplicacion corre en el puerto: '+ port);
    })
})
.catch((error)=>{
    console.error('Error al sincronizar la base de datos:'+ error);
});
app.use('/api',restaurantrouter);
app.use('/api',productrouter);