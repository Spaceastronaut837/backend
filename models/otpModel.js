const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const otpModel=new Schema({
    otp:{
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String
    }
})

module.exports=mongoose.model("otpModel",otpModel)