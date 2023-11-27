const {Router} = require("express")
const transporter = require("../config/nodemailer")
const nodemailer = Router()
const cron = require('node-cron');

nodemailer.post("/", async (req, res) => {
    const {gmail, name,mensaje,hora,programar} = req.body
    console.log(gmail, name,mensaje,hora,programar)
    console.log(typeof(hora))
    if(programar === null){
        await transporter.sendMail({
            from:`mensaje enviado por ${name}`,
            to: gmail,
            text: `${mensaje}`
        });
        res.send('Correo enviado correctamente');
        return
    }
    if (programar === 'on'){
        const [horaCron, minutoCron] = hora.split(':');
            cron.schedule(`${minutoCron} ${horaCron} * * *`, async () => {
                await transporter.sendMail({
                from:`mensaje enviado por ${name}`,
                to: gmail,
                text: `${mensaje}`
                });
        });
        res.send('Correo programado correctamente');
    }
});

module.exports = nodemailer;