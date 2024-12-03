const express=require('express')
const { allproducts, addproducts } = require('../controllers/productController')
const router=express.Router()

router.route('/products').get(allproducts)
router.route('/newproduct').post(addproducts)

module.exports=router