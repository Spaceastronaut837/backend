const zod=require("zod")
const zodValidationSchema=zod.object(
    {
        name:zod.string(),
        email:zod.string().email(),
        age:zod.number(),
        gender:zod.string(),
        hobbies:zod.array(zod.string()),
        department:zod.string(),
        password:zod.string()
    }
)


module.exports=zodValidationSchema