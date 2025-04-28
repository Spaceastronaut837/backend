const mailer=require("nodemailer")
const path=require("path")

const mailSend=async(to,subject,text)=>{
    const transporter=mailer.createTransport({
        service:"gmail",
        auth:{
            user:"dhwanitgarg9@gmail.com",
            pass:"vzat velt rnln padr"
        }
    })
    const mailOptions={
        from:"dhwanitgarg9@gmail.com",
        to:to,
        subject:subject,
        text:text
    }
    const mailResponse=await transporter.sendMail(mailOptions);
    console.log(mailResponse);
}
module.exports=mailSend