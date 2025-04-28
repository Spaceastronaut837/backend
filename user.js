console.log("This is the user file...");
var userName="amit"
var userAge=20

const getUserData = (flag)=>{
    console.log("Get user data called.....",flag);
    
}
module.exports={
    userName,userAge,getUserData
}   
app.get("/test",(req,res)=>{
    // console.log("test api called....");
    // res.send("test api called..")
    res.json(
        {
            message:"users api called...",
            employee:employees
        }
    )
})

const employees=[
    {
        id:1,
        name:"Laxman",
        salary:20000,
        job:"IT_PROG",
        did:216
    },
    {
        id:2,
        name:"Ram",
        salary:30000,
        job:"SEN_MAN",
        did:100
    },
    {
        id:3,
        name:"Shyam",
        salary:25000,
        job:"JUN_MAN",
        did:80
    }
]
const users=[
    {
        id:1,
        name:"Dhwanit"
    },
    {
        id:2,
        name:"Rahul"
    }
]
const students=[
    {
        rno:1,
        name:"Mohit",
        marks:90,
        courses:[
            "Physics","Economics"
        ],
        gender:"Male",
    },
    {
        rno:2,
        name:"Rashmika",
        marks:70,
        courses:[
            "Biology","Psychology"
        ],
        gender:"Female",
    },
    {
        rno:3,
        name:"Sohil",
        marks:100,
        courses:[
            "Physics","Maths"
        ],
        gender:"Male",
    }
]