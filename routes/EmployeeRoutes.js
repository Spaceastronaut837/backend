const router=require("express").Router();
const employeeController=require("../controllers/EmployeeController")

router.get("/employees",employeeController.getEmployees)
router.post("/employees",employeeController.addEmployees)
module.exports=router