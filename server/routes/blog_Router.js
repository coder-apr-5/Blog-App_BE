const express=require("express")
const { createBlog, getAllBlogs, getSingleBlog, deleteBlogs, updateBlog } = require("../controllers/blog_controllers")

const router=express.Router()

//POST: /blogs
//GET: /blogs
//GET: /blogs/:id
//PUT: /blogs/:id
//DELETE: /blogs/:ID

//create--->C
router.post('/blogs',createBlog)

// Reade---->R
router.get('/blogs',getAllBlogs)

//Reade a particular blogs
router.get('/blogs/:id',getSingleBlog)

//Update ----> U
router.put('/blogs/:id',updateBlog)

//DELETE ----->D
router.delete('/blogs/:id',deleteBlogs)

module.exports=router