const productModel=require("../models/ProductModel")

const addProducts=async(req,res)=>{
    try{

    
    const savedProduct=await productModel.create(req.body)
    if(savedProduct)
    {
        res.json({
            message:"Product Added Successfully",
            data:savedProduct
        })
    }
    else{
        res.json({
            message:"Product not added",
            data:null
        })
    }
}catch(err){
    res.json({
        message:"Internal Server Error",
        data:err
    })
}
}
const getProducts=async(req,res)=>{
    const products=await productModel.find().populate("category")

    if(products.length>0)
    {
        res.json({
            message:"product(s) found",
            data:products
        })
    }
    else{
        res.json({
            message:"product not found",
        })
    }
}
const getProductsByCategory=async(req,res)=>{
    const products=await productModel.find({
        category:req.query.category
    })
    if(products.length>0)
    {
        res.json({
            message:"product(s) found",
            data:products
        })
    }
    else{
        res.json({
            message:"product not found",
        })
    }
}
module.exports={
    addProducts,
    getProducts,
    getProductsByCategory
}