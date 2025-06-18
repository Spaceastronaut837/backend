const multer=require('multer')
const path=require('path')
const cModel=require("../models/cModel")
const cloudinaryUpload=require("../utils/cloudinary")
const { url } = require('inspector')

const storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

// const upload=multer({
//     storage:storage  
// }).single("file")

const upload=multer({
    storage:storage  
}).array("files",10);

const uploadFile=async(req,res)=>{
    upload(req,res,async(err)=>{
        if(err)
        {
            res.json({
                message:"Error in file upload",
                error:err
            })
        }
        else{
            const cloudinaryResponse=await Promise.all(
                req.files.map(file=>cloudinaryUpload.uploadImage(file.path))
            )
            console.log(cloudinaryResponse[0].url);
            const savedURL=await cModel.create({"path":cloudinaryResponse[0].url});
            // const savedURL=await cModel.create()
            console.log(cloudinaryResponse);
            res.json({
                message:"File uploaded successfully",
                file:req.file,
                cloudinaryResponse
            })
        }
    })
}

module.exports={
    uploadFile
}