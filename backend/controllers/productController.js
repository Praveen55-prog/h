const Product=require('../models/product')


exports.allproducts=async(req,res,next)=>{
    const products=await Product.find()
    res.status(200).json({
        status:true,
        count:products.length,
        message:'connected',
        products
    })
}

exports.addproducts=async(req,res,next)=>{
    const products=await Product.create(req.body)

    res.status(200).json({
        status:true,
        message:"Products added successfully",
        products
    })
}