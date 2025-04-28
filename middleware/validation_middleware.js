const validateSchema=(schema)=>async(req,res,next)=>{
    try{
        await schema.parseAsync(req.body)
        next()
    }catch(err){
        console.log(err);
        res.json({
            message:"error",
            data:err
        })
    }
}
module.exports={
    validateSchema
}