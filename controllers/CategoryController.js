const CategoryModel=require("../models/CategoryModel")

const addCategory=async(req,res)=>{
    const savedCategory=await CategoryModel.create(req.body)
    res.json({
        message:"category saved successfully",
        data:savedCategory
    })
}

module.exports={
    addCategory
}