const mongoose=require("mongoose")
const Schema=mongoose.Schema


const userSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:Number
    },
    Places: {
        type:String
    },
    Rating:{
        type:Number
    },
    Review:{
        type:[String]
    },
    Phone:{
        type:Number
    }

})

module.exports=mongoose.model("User",userSchema);
