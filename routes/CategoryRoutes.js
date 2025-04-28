const router=require("express").Router()
const categoryController=require("../controllers/CategoryController")

router.post("/create",categoryController.addCategory)

module.exports=router