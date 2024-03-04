const express=require('express');
const productcontroller=require('../Controllers/productController');
const router=express.Router();

router.post('/createrproduct',productcontroller.createProduct);
router.get('/listproducts',productcontroller.listProduct);
module.exports=router;