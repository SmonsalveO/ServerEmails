
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
    user: "santimonsalveo.123@gmail.com",
    pass:"dorq hlbj bllj fpiv",
    },
})

transporter.verify().then(()=>console.log("Ready for send emails")).catch((error)=>console.error(error))
module.exports = transporter;
