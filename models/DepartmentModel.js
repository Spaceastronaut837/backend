const mongoose=require("mongoose")
const Schema=mongoose.Schema

const departmentSchema=new Schema(
    {
        name:{
            type:String
        }
    }
)

module.exports=mongoose.model("department",departmentSchema)