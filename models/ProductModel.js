const mongoose=require("mongoose")
const Schema=mongoose.Schema
const ProductModel=new Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    isAvailable:{
        enum:["in stock","Out of Stock","Expires soon"],type:String
    }
})

module.exports=mongoose.model("products",ProductModel)