const express=require("express");
const mongoose=require("mongoose");
const cors = require('cors');
const path = require("path");
const projroutes=require("./routes/projroutes");
require('dotenv').config();
const app=express();


//middlewares
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use(express.static(path.join(__dirname, "build")));

//Routes
app.use(cors({ origin: true }));
app.use(express.json())
app.use('/api/places', projroutes)

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        app.listen(4000,()=>{
            console.log("process started at server 4000")
        })
    })

    .catch((error)=>{
        console.log(error)
    })
    