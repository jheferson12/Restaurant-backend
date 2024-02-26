const connection=require('./connection.js');
//Models
const restaurant=require('../Models/restaurant');
const product= require('../Models/product.js');

function sync(){
    restaurant.hasMany(product,{
        foreignKey:'restaurantId',
        onDelete:'restrict',
        onUpdate:'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey:'restaurantId'
    })
}
sync();