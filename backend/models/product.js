const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    name:{
        type:String
    },
    price:{

        type:String
    },
    description:{

        type:String
    },
    image:{

        type:String
    },
    stock:{

        type:Number
    },
    createdAt:{

        type:Date,
        default:Date.now()
    },

})
module.exports=mongoose.model('product',productSchema)