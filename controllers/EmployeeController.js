const employeeModel=require("../models/EmployeeModel")

const getEmployees=async(req,res)=>{
    const employees = await employeeModel.find();

    res.json({
        message:"Employees api called",
        data:employees
    });
};

const addEmployees=async(req,res)=>{
    const savedEmployee=await employeeModel.create(req.body);
    res.json(
        {
            message:"Employee saved successfully",
            data:savedEmployee,
        }
    )
}

const getEmployeeByGender=async(req,res)=>{
    const age=req.query.age
    const salary=req.query.salary
    const sort=req.query.sort
    const page=req.query.page
    const foundEmployee=await employeeModel.find({salary:{$gt:salary}}).sort({age:sort=="asc"?1:-1})
    if(foundEmployee.length>0)
    {
        res.json({
            message:"users found",
            data:foundEmployee,
        })
    }
    else{
        res.json({
            message:"user not found"
        })
    }
}

module.exports={
    getEmployees,
    addEmployees,
    getEmployeeByGender,
};