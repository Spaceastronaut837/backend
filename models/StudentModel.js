const mongoose=require("mongoose")
const Schema=mongoose.Schema

const StudentModel=new Schema(
    {
        name:{
            type:String
        },
        email:{ 
            type:String
        },
        age:{
            type:Number
        },
        gender:{
            type:String
        }
    }
)
module.exports=mongoose.model("students",StudentModel);