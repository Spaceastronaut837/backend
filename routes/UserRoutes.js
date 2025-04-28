const router=   require("express").Router();
const userController=require("../controllers/UserController")
const validationMiddleWare=require("../middleware/validation_middleware")
const validateSchema=require("../userValidationSchema/zodValidationSchema")

router.get("/users",userController.getUsers)
router.post("/user",validationMiddleWare.validateSchema(validateSchema),userController.addUser)
router.post("/user/forgotPassword",userController.forgotPassword)
router.put("/user/forgotPassword/passwordReset",userController.resetPassword)
router.delete("/user/:id",userController.deleteUser)
router.get("/finduserbygender",userController.getUserByGender)
router.put("/user/:id",userController.updateUserById)
router.put("/user/addHobby/:id",userController.addHobbieToId)
module.exports=router;