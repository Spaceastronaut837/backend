const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userModel=new Schema({
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
    },
    hobbies:[
        {
            type:String
        }
    ],
    department:{
        type:Schema.Types.ObjectId,
        ref:"department"
    },
    password:{
        type:String
    }
})

module.exports=mongoose.model("users",userModel);