const mongoose=require("mongoose")
const catchAsynError = require('../middleware/catchAsynError')
const User=require('../models/user')
const ErrorHandler = require('../utils/errorHandler')


exports.registerUser=catchAsynError( async(req,res,next)=>{
    const name=req.body.name
    const number=req.body.number
    const password=req.body.password
    if(!name,!number,!password){
        return next(new ErrorHandler("Please Enter all the fields",404))
    }
    const user=await User.create(req.body)
   res.status(200).json({
    success:true,
    messages:"Successfully Registered",
    user
   })
})

exports.loginUser=catchAsynError( async(req,res,next)=>{
    const {number,password}=req.body
    if(!number || !password){
        return next(new ErrorHandler("Please enter Email and Password",401))
    }
    const user=await User.findOne({number}).select('+password')
    if(!user){
        return next(new ErrorHandler("Inavlid Number or Password",401))
    }
    if(!await user.isValidPassword(password)){
        return next(new ErrorHandler("Inavlid Email or Password",401)) 
    }
    
    res.status(200).json({
        message:"ok"
    })
})