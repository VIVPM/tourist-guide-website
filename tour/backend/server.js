const express=require("express");
const mongoose=require("mongoose");
const projroutes=require("./routes/projroutes");
const app=express();


//middlewares
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//Routes
app.use('/api/places', projroutes)


mongoose.connect("mongodb+srv://gururaj:test123@cluster0.x97jixd.mongodb.net/?retryWrites=true")
    .then(()=>{
        app.listen(4000,()=>{
            console.log(" process started at server 4000")
        })
    })

    .catch((error)=>{
        console.log(error)
    })
    