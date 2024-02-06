const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('db connected')
    })
    .catch((err)=>{
        console.log(err)
    })

const reviewSchema=mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:10,
       
    },
    name:{
        type:String,
        required:true
    },
    recommended: {
        type: Boolean,
        default: false
    },
    desc:{
        type:String
    },
    title:{
        type:String
    }

})

const Reviews=mongoose.model('Review',reviewSchema)

module.exports=Reviews