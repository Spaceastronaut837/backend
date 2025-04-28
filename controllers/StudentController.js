const studentModel=require("../models/StudentModel")

const addStudents=async(req,res)=>{
    const savedStudent=await studentModel.create(req.body)
    res.json(
        {
            message:"Student saved successfully",
            data:savedStudent
        }
    )
}
module.exports={
    addStudents
};