const { Sequelize }= require('sequelize')
var dataBase= 'RestaurantDB';
var userName='postgres';
var password="Hombredejuego1A"
const connection = new Sequelize(dataBase,userName,password,{
    host: 'localhost',
    dialect: 'postgres'
});
module.exports= connection;
