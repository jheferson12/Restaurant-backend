const { Connection } = require('pg')
const { Sequelize }= require('sequelize')
var database= 'RestaurantDB';
var userName='postgres';
var password="123456789" //Hombredejuego1A
const connection = new Sequelize(database,userName,password,{
    host: 'localhost',
    dialect: 'postgres'
});
module.exports= connection;
