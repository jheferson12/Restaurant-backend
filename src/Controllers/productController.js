require('express');
const product = require('../Models/product');
const restaurant = require('../Models/restaurant');

async function createProduct(req, res){
    try{
        await product.create({
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productPrice: req.body.productPrice,
            restaurantId: req.body.restaurantId
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error=>{
            return res.status(400).json({
                error: error
            });
        })
    }catch(e){
        console.log(e);
    }
}

async function listProduct(){
    try{
        await product.findAll({
            attribute: [
                'productId',
                'productName',
                'productDescription',
                'productPrice'
            ],
            order: ['productName'],
            include: {
                model: 'restaurant', 
                where: { restaurantId: req.params.restaurantId }
            }
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error=>{
            return res.status(400).json({
                error: error
            });
        })
    }catch(e){
        console.log(e);
    }
}

async function updateProduct(req, res){
    try{
        await product.updateProduct({

        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })
    }catch(e){
        console.log(e);
    }
   
}

async function disableProduct(){
    try{
        await product.disableProduct({

        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })
    }catch(e){
        console.log(e);
    }
}

async function enableProduct(){}

module.exports = {
    createProduct,
    listProduct,
    updateProduct,
    disableProduct,
    enableProduct
}