
const mongoose=require('mongoose')

const blog_schema=mongoose.Schema({
    //title , content , author, comments, likes,createdAt
     title:{
        type:String,required:true
     },
     content:{
        type:String,required:true
     },
     author:{
        type:String,required:true
     },

   //   comments:[{
   //      user:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
   //      text:String
   //   }],

   //   likes:{
   //      type:mongoose.Schema.Types.ObjectId,
   //      ref:"user"
   //   },
     createdAt:{
        type:Date,default:Date.now
     }

})
const blog_model=mongoose.model("posts",blog_schema)
module.exports=blog_model