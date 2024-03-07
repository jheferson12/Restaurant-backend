const express=require('express');
const productcontroller=require('../Controllers/productController');
const router=express.Router();

router.post('/createrproduct',productcontroller.createProduct);
router.get('/listproducts',productcontroller.listProduct);
router.put('/updateproduct/:productId',productcontroller.updateProduct);
router.put('/disableproduct/:productId',productcontroller.disableProduct);
router.put('');
module.exports=router;