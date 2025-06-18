const mongoose=require("mongoose")
const Schema=mongoose.Schema
const cModel=new Schema({
    path:{
        type:String
    }
})

module.exports=mongoose.model("cloudinary",cModel)