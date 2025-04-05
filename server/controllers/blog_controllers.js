const blogs=require('../models/blog_model')
//blog creation logic
exports.createBlog=async(req,res)=>{
    try {
        const newBlogs=new blogs({
            title: req.body.title,
            content: req.body.content,
            author:req.body.author,
            //additional change after
            // comments : req.user.id,
            // likes:req.user.id
        })
        const createPost=await newBlogs.save()
        res.json(createPost)
    } catch (error) {
        res.json({
            message:error.message
        })
    }
   
}

//all blogs reads logic
exports.getAllBlogs=async(req,res)=>{
   try {
     const getBlogs=await blogs.find()
     res.json(getBlogs)
   } catch (error) {
       res.json({
        message:error.message
       })
   }
}

//get a particular blog
exports.getSingleBlog=async(req,res)=>{
    try {
        const id=req.params.id
        const getsingleBlog=await blogs.find({_id:id})
        res.json(getsingleBlog)
    } catch (error) {
        res.json({
            message:error.message
        })
    }
}

//update blogs logic

exports.updateBlog=async(req,res)=>{
    try {
        const id=req.params.id
        const updateBlog=await blogs.updateOne({_id:id},{
            $set:{
                title:req.body.title,
                content:req.body.content,
                author:req.body.author
            }
        })
        res.json(updateBlog)
    } catch (error) {
        res.json({
            message:error.message
        })
    }
}

//delete blogs logic
exports.deleteBlogs=async(req,res)=>{
    try {
        const id=req.params.id
        const deleteBlog=await blogs.deleteOne({_id:id})
        res.json(deleteBlog)
    } catch (error) {
        res.json({
            message:error.message
        })
    }
}