import nodemailer from 'nodemailer';

export const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: 'debos.das.02@gmail.com',
      pass: 'mlqk wsyz byij dylw',
    },
  });
  await transporter.sendMail({
    from: 'dasdebos602@gmail.com', // sender address
    to: 'debos.das.02@gmail.com', // list of receivers
    subject: 'change your password', // Subject line
    text: 'Reset your password', // plain text body
    html: '<b>This change your password mail?</b>', // html body
  });
};
