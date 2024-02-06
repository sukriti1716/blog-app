const mongoose=require('mongoose')

const password=encodeURIComponent('Sukritb#123456')
mongoose.connect(`mongodb+srv://blogs:${password}@cluster0.q6updbe.mongodb.net/?retryWrites=true&w=majority`)
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