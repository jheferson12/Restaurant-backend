const {Model,DataTypes}= require('sequelize');
const connection=require('../Database/connection');
class product extends Model{}
product.init({
    productid:{
        type:DataTypes.INTEGER,
        primarykey:true,
        autoIncremental:true
    },
    productName:{
        type:DataTypes.STRING,
        allownull:false
    },
    productDescription:{
        type: DataTypes.STRING,
        allownull:false
    },
    productPrice:{
        type:DataTypes.FLOAT,
        allownull:false
    },
    restaurantId:{
        type:DataTypes.INTEGER,
        allownull:false
    }
},{
    sequelize:connection,
    modelname:'product',
    paranoid:true,
    deleteAt:'destroytime'

});
module.exports=product;
