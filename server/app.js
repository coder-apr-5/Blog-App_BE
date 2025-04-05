const express=require("express")
const cors=require("cors")
require('./config/db')
const blogRouters=require('./routes/blog_Router')
const app=express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cors())
app.use(blogRouters)



app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Home route"
    })
})


module.exports=app