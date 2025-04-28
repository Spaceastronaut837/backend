const userModel=require("../models/UserModel");
const sendMail=require("../utils/mailUtil")
const otpModel=require("../models/otpModel")

const getUsers=async(req,res)=>{
    const users=await userModel.find().populate("department");

    res.json({
        message:"users api called...",
        data:users,
    });
};

const getUsers2=async(req,res)=>{
    const users=await userModel.find().populate("department");
    res.json({
        message:"users api called...",
        data:users,
    });
}

const addUser=async(req,res)=>{
    const savedUser=await userModel.create(req.body);
    sendMail(savedUser.email,"Welcome mail","Hi"+savedUser.name+"!Glad to induct you inside the portal")
    res.json({
        message:"user saved successfully",
        data:savedUser,
    })
}

const forgotPassword=async(req,res)=>{
    const no=Math.floor(10000*Math.random()+999)
    console.log(no);
    
    const user=await userModel.findOne({
        email:req.body.email
    })
    const OTP=await otpModel.create({otp:no,email:user.email});
    sendMail(user.email,"Password reset mail","Hi, Your otp for password reset is "+no)
    res.json({
        message:"OTP successfully sent",
        data:OTP
    })
}

const deleteUser=async(req,res)=>{
    const deletedUser=await userModel.findByIdAndDelete(req.params.id);
    if(deletedUser!=null)
    {
        res.json({
            message:"user deleted successfully",
            data:deletedUser,
        })
    }
    else{
        res.json({
            message:"user not found"
        })
    }
}

const updateUserById=async(req,res)=>{
    const updatedUser=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(updatedUser)
    {
        res.json({
            message:"User updated successfully",
            data:updatedUser,
        })
    }
    else{
        res.json({
            message:"User not updated"
        })
    }
}
const resetPassword=async(req,res)=>{
    const isCorrect=await otpModel.findOne({otp:req.body.otp})
    const foundUser=await userModel.findOne({email:isCorrect.email})
    if(!isCorrect)
    {
        res.json({
            message:"Otp is incorrect"
        })
    }else{
        if(!foundUser)
        {
            res.json({
                message:"No user with the same email exists in database"
            })
        }else{
            // foundUser.findByIdAndUpdate(foundUser._id,{gender:req.body.gender})
            foundUser.gender=req.body.gender
            await foundUser.save()
            res.json({
                message:"Gender successfully changed",
                data:foundUser
            })
        }
    }
}

const addHobbieToId=async(req,res)=>{
    const user=await userModel.findById(req.params.id)
    if(user.hobbies.includes(req.body.hobby))
    {
        res.json({
            message:"Hobby is already there"
        })
    }
    else{
        const  addedHobby=await userModel.findByIdAndUpdate(req.params.id,{$push:{hobbies:req.body.hobby}},{new:true})
        if(addedHobby)
            {
                res.json({
                    message:"Hobby added successfully",
                    data:addedHobby,
                })
            }
            else{
                res.json({
                    message:"Hobby not added  "
                })
            }
    }  
}

const getUserByGender=async(req,res)=>{
    const gender=req.query.gender;
    const age=req.query.age;
    const sort=req.query.sort;
    const page=req.query.page;
    const foundUsers=await userModel.find({gender:gender,age:{$gt:age}}).sort({age:sort=="asc"?1:-1}).limit({page})
    if(foundUsers.length>0)
    {
        res.json(
            {
                message:"users found",
                data:foundUsers,
            }
        )
    }
    else{
        res.json(
            {
                message:"user not found",
            }
        )
    }
}

module.exports={
    getUsers,
    addUser,    
    forgotPassword,
    resetPassword,
    deleteUser,
    getUserByGender,
    updateUserById,
    addHobbieToId,
};  