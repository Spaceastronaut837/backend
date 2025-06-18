// console.log("Hi all");
// const user=require("./user")
// console.log(user.userAge);
// console.log(user.userName);
// user.getUserData(true);
const express=require("express")
const mongoose=require("mongoose")

const app=express()
app.use(express.json())

const userRoutes=require("./routes/UserRoutes");
const employeeRoutes=require("./routes/EmployeeRoutes");
const studentRoutes=require("./routes/StudentRoutes")
const departmentRoutes=require("./routes/DepartmentRoutes")
const productRoutes=require("./routes/ProductRoutes")
const categoryRoutes=require("./routes/CategoryRoutes")
const uploadRoutes=require("./routes/UploadRoutes")

app.use(employeeRoutes)
app.use(userRoutes)
app.use(studentRoutes)
app.use("/dept",departmentRoutes)
app.use("/product",productRoutes)
app.use("/category",categoryRoutes)
app.use(uploadRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/dhwanitapp").then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("Error",err);
})



const PORT=3001;

app.listen(PORT,()=>{
    console.log("server started on port ",PORT);
})
