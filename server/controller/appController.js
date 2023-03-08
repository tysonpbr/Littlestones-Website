require('dotenv').config()

const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const contact = (req, res) => {

  const { name, email, body } = req.body

  let config = {
    service : 'gmail',
    auth : {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  }

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "salted",
    product : {
      name: "Littlestones Creations",
      link : 'https://mailgen.js/'
    }
  })

  let response = {
    body: {
      name : "Amber",
      intro: "Someone Is Trying To Contact You!",
      table : {
        data : [
          {
            Name : name,
            Email : email,
            Message : body,
          }
        ],
      },
    }
  }

  let mail = MailGenerator.generate(response)

  let message = {
    from : process.env.EMAIL,
    to : process.env.RECIPIENT_EMAIL,
    subject: "Someone Is Trying To Contact You!",
    html: mail
  }

  transporter.sendMail(message).then(() => {
    return res.status(201).json({
      msg: "you should receive an email"
    })
  }).catch(error => {
    return res.status(500).json({ error })
  })
}


module.exports = {
  contact
}