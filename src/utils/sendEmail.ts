// src/utils/sendEmail.ts
import nodemailer from 'nodemailer';

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export default async (body: EmailRequestBody) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const { name, email, message } = body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `[Dylan Henderson's Website] New Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
  } catch (error) {
    console.error(error);
    throw new Error('Error sending email');
  }
};
