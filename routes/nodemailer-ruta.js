const {Router} = require("express")
const transporter = require("../config/nodemailer")
const nodemailer = Router()
const cron = require('node-cron');

nodemailer.post("/", async (req, res) => {
    const {gmail, name, mensaje, hora, programar} = req.body
    try {
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
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al enviar el correo');
    }
});

module.exports = nodemailer;