const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[false,'Please enter your Name']
    },
    number:{
        type:Number,
        required:[false,'Please enter your Number'],
        unique:true
    },
    password:{
        type:String,
        required:[false,'Please enter your Password']
    },
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

userSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10)
})

userSchema.methods.getJwTToken=function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })

}   

userSchema.methods.isValidPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports=mongoose.model('user',userSchema)