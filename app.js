require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const path=require('path')
const Blogs=require('./models/Blogs')
const Reviews=require('./models/reviews')
const methodOverride=require('method-override')
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('db connected')
    })
    .catch((err)=>{
        console.log(err)
    })



app.get('/' ,(req,res)=>{
    res.render('home')
})

// edit
app.get('/blogs/:id/edit',async (req,res)=>{
    const {id}=req.params
    const blog=await Blogs.findById(id)
    //console.log(blog)
    res.render('edit',{blog})
})

// when i save for edit it goes to post request which is overriden by put request
app.put('/blogs/:id',async (req,res)=>{
    const {id}=req.params
    const {title,desc,author,views,img}=req.body
    const blog= await Blogs.findById(id)
    if(title) blog.title=title
    if(author) blog.author=author
    if(views) blog.views=views
    if(img) blog.img=img
    if(desc) blog.desc=desc

    await blog.save()
    res.redirect('/blogs')
})

//edit review
app.get('/reviews/:id/edit',async (req,res)=>{
    const {id}=req.params
    const review=await Reviews.findById(id)
    console.log(review)
    res.render('editReview',{review})
})

// when i click save button put request gets overriden
app.put('/reviews/:id',async (req,res)=>{
    const {id}=req.params
    const {name,rating,author,recommended,desc,title}=req.body
    const isrecommended=recommended==='true'
    const review=await Reviews.findById(id)
    if(name) review.name=name
    if(rating) review.rating=rating
    if(author) review.author=author
    if(desc) review.desc=desc
    if(isrecommended) review.recommended=isrecommended
    if(title) review.title=title

    await review.save()
    res.redirect('/reviews')
    
})

// to delete a review
app.delete('/reviews/:id',async (req,res)=>{
    const {id}=req.params
    await Reviews.findByIdAndDelete(id)
    res.redirect('/reviews')
})

// to post blogs
app.post('/blogs',async (req,res)=>{
    const {title,desc,author,views,img}=req.body
    Blogs.create({title,desc,author,views,img})
    res.redirect('/blogs')
})

// to add new review
app.get('/reviews/new',(req,res)=>{
    res.render('newReview')
})

// get all reviews

app.get('/reviews',async (req,res)=>{
    const reviews=await Reviews.find({})
    res.render('Reviews',{reviews})
})

// to post reviews
app.post('/reviews/new',(req,res)=>{
    const {name,rating,author,recommended,desc,title}=req.body
    const isrecommended=recommended==='true'
    Reviews.create({name,rating,author,recommended:isrecommended,desc,title})
    res.redirect('/reviews')
})

// to get a blog from review
app.get('/reviews/blog/:author',async (req,res)=>{
    const {author}=req.params
    const blog=await Blogs.findOne({author:author})
    //console.log(blog)
    res.redirect(`/blogs/${blog._id}`)

})

// to show all blogs
app.get('/blogs',async (req,res)=>{
    const blogs=await Blogs.find({})
    console.log(blogs)
    res.render('Blogs',{blogs})
   
})

app.get('/blogs/new',(req,res)=>{
    res.render('new')
})


app.get('/home' ,(req,res)=>{
    res.render('home')
})

// to show particular blog
app.get('/blogs/:id', async (req,res)=>{
    const {id}=req.params
    const blog=await Blogs.findById(id)
    console.log(blog)
    res.render('show',{blog})
})

// to delete a blog

app.delete('/blogs/:id',async (req,res)=>{
    const {id}=req.params
    await Blogs.findByIdAndDelete(id)
    res.redirect('/blogs')
})

const PORT=process.env.PORT || 6600
app.listen(PORT,()=>{
    console.log('server is up at ',PORT)
})