const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const placeSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Type:{
        type:String
    },
    Review:{
        type:[String],
    },
    Location:{
        type:String
    },
    Time:{
        type:String
    },
    Desc:{
        type:String
    },
    type:{
        
    }
})

module.exports=mongoose.model("Places",placeSchema);
