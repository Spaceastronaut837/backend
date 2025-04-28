const router=require("express").Router();
const studentController=require("../controllers/StudentController")

router.post("/student",studentController.addStudents)
module.exports=router