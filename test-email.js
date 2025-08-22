const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🔍 Testing Email Configuration...\n');
  
  // Check environment variables
  console.log('Environment Variables:');
  console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
  console.log('Email user:', process.env.EMAIL_USER || 'NOT SET');
  console.log('');
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Missing email environment variables!');
    console.log('Please check your .env.local file');
    return;
  }

  try {
    console.log('📧 Creating email transporter...');
    
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('🔐 Verifying connection...');
    await transporter.verify();
    console.log('✅ Email configuration is working!\n');

    console.log('📤 Sending test email...');
    const result = await transporter.sendMail({
      from: `"Test Email" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🧪 Test Email from AIIMS Booking Form",
      text: `
Hello!

This is a test email from your AIIMS Home Care booking form.

If you received this email, your email configuration is working correctly!

Booking form details will now be sent to this email address.

Best regards,
AIIMS Home Care Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001055;">🧪 Test Email from AIIMS Booking Form</h2>
          <p>Hello!</p>
          <p>This is a test email from your AIIMS Home Care booking form.</p>
          <p><strong>If you received this email, your email configuration is working correctly!</strong></p>
          <p>Booking form details will now be sent to this email address.</p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Best regards,<br>
            AIIMS Home Care Team
          </p>
        </div>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', result.messageId);
    console.log('📬 Check your email inbox (and spam folder)');
    
  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n💡 Solution: Check your Gmail app password');
      console.log('1. Go to Google Account → Security → App passwords');
      console.log('2. Generate a new app password for "Mail"');
      console.log('3. Update your .env.local file');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n💡 Solution: Check your internet connection');
    } else if (error.code === 'ETIMEDOUT') {
      console.log('\n💡 Solution: Try again, or check firewall settings');
    }
  }
}

testEmail();

