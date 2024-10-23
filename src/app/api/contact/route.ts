// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, surname, contactNumber, email, subject, message } = req.body;

    console.log('Form Data:', { name, surname, contactNumber, email, subject, message });

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASSWORD, // Your Gmail App Password (not the account password)
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // Sender email address (from the form input)
        to: process.env.GMAIL_USER, // Your Gmail address to receive the email
        subject: subject || 'New Contact Form Submission',
        text: `
          You have a new contact form submission:
          Name: ${name} ${surname}
          Contact Number: ${contactNumber}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
      });

      // Respond with success message
      return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
