const {Model,DataTypes}= require ('sequelize');
const connection=require ('../Database/connection');
class restaurant extends Model {}
restaurant.init({
    restaurantId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    restaurantName:{
        type:DataTypes.STRING,
        unique:true,
        allownNull:false
    },
    restaurantNit:{
        type:DataTypes.STRING,
        unique:true,
        allownNull:false

    },
    restaurantAddress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantPhone:{
        type:DataTypes.STRING,
        allownNull:false
    },
    cityId:{
        type: DataTypes.STRING,
        allownNull:false
    }
},{
    sequelize:connection,
    modelName:'restaurant',
    paranoid:true,
    deleteAt:'destrorytime'
});
module.exports= restaurant;