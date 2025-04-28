const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const employeeModel=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    salary:{
        type:Number
    }

})

module.exports=mongoose.model("employees",employeeModel)