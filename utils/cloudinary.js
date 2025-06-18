const cloudinary=require("cloudinary").v2

cloudinary.config({
    cloud_name:"de5rw0ot6",
    api_key:"697757332162166",
    api_secret:"rJZqq3W6b59-oH832GBhcCJhl3I"
})

const uploadImage=async(filePath)=>{
    const response=await cloudinary.uploader.upload(filePath);
    return response;
};
module.exports={
    uploadImage,
}