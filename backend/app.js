const express=require('express')
const path=require('path')
const app=express()

const product=require('./routers/productRouter')
const user=require('./routers/uerRouter')  
const cookieParser=require('cookie-parser')
const cors=require('cors')
const errorMiddleware=require('./middleware/error')
app.use(cors())
app.use(express.json())
app.use(express.json())
app.use(cookieParser())
app.use('/prasanth',product)
app.use('/prasanth',user)

if(process.env.Node_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../fontend/build")))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../fontend/build/index.html'))
    })
    app.get('/', (req, res) => {
        res.send('Server is working!');
    });
    
}



app.use(errorMiddleware)
module.exports=app