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
    Rating:{
        type:[Number],
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
})

module.exports=mongoose.model("Place",placeSchema);
