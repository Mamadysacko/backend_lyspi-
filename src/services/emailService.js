// services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendVerificationEmail = async (email, token) => {
  const url = `${process.env.APP_URL}/api/auth/verify/${token}`;

  await transporter.sendMail({
    from: '"Mon App" <no-reply@monapp.com>',
    to: email,
    subject: 'Vérifie ton email',
    html: `<p>Clique ici pour activer ton compte :</p>
           <a href="${url}">Activer mon compte</a>
           <p><small>Valable 1 heure.</small></p>`
  });
};

module.exports = { sendVerificationEmail };