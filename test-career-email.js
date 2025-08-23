import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config({ path: '.env.local' });

async function testEmail() {
    try {
        console.log('Testing email configuration...');
        console.log('Email User:', process.env.EMAIL_USER);
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        console.log('Verifying connection...');
        await transporter.verify();
        console.log('Connection successful!');

        console.log('Sending test email...');
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Career Application System Test',
            text: 'This is a test email to verify the career application system.'
        });

        console.log('Test email sent successfully!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.error('Error:', error);
    }
}

testEmail();
