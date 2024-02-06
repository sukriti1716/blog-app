const mongoose=require('mongoose')


const blogsSchema=mongoose.Schema({
    
        title:{
            type:String,
            required:true,
            trim:true

        },
        img:{
            type:String,
            default:'https://th.bing.com/th/id/OIP.z9glurBsxTWPmabNjPqAhwHaDt?pid=ImgDet&w=202&h=101&c=7&dpr=1.5'
        },
        desc:{
            type:String
        },
        author:{
            type:String,
            required:true
        },
        views:{
            type:String
        }
    
})

const Blogs=mongoose.model('Blog',blogsSchema)

module.exports=Blogs