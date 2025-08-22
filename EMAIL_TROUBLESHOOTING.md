# Email Troubleshooting Guide

If you're not receiving emails from your booking form, follow this step-by-step troubleshooting guide:

## 🔍 Step 1: Check Environment Variables

1. **Verify `.env.local` file exists** in your project root
2. **Check the format** - no spaces around `=`
3. **Restart your development server** after making changes

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 🔍 Step 2: Gmail App Password Issues

### Common Problems:
- **Using regular password instead of app password**
- **App password not generated correctly**
- **2-factor authentication not enabled**

### Solution:
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not)
3. Go to **Security** → **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Generate a 16-character password
6. Copy and paste it in `.env.local`

## 🔍 Step 3: Check Console Logs

1. **Open browser developer tools** (F12)
2. **Go to Console tab**
3. **Submit the booking form**
4. **Look for error messages** in the console

Common error messages:
- `"Email configuration is missing"` → Check `.env.local`
- `"Email authentication failed"` → Wrong app password
- `"Email connection failed"` → Network/security issue

## 🔍 Step 4: Test Email Configuration

Create a test file to verify your email setup:

```javascript
// test-email.js (create this file temporarily)
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  try {
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ Email configuration is working!");

    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "This is a test email from your booking form.",
    });

    console.log("✅ Test email sent successfully!");
    console.log("Message ID:", result.messageId);
  } catch (error) {
    console.error("❌ Email test failed:", error.message);
  }
}

testEmail();
```

Run with: `node test-email.js`

## 🔍 Step 5: Check Email Spam/Junk Folder

1. **Check your spam/junk folder**
2. **Mark emails as "Not Spam"** if found
3. **Add your email to contacts** to prevent future issues

## 🔍 Step 6: Alternative Email Services

If Gmail continues to fail, try these alternatives:

### Outlook/Hotmail:
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-outlook-password
```

### Yahoo:
```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-yahoo-app-password
```

## 🔍 Step 7: Common Solutions

### Solution 1: Enable "Less secure app access"
- Go to Google Account → Security
- Enable "Less secure app access" (if available)

### Solution 2: Use Gmail API (Advanced)
- Set up Google Cloud Project
- Enable Gmail API
- Use OAuth2 instead of app password

### Solution 3: Use Email Service Providers
- **SendGrid** (free tier available)
- **Mailgun** (free tier available)
- **Resend** (free tier available)

## 🔍 Step 8: Debug Mode

Add this to your `.env.local` for detailed logging:

```env
NODE_ENV=development
DEBUG=nodemailer:*
```

## 🔍 Step 9: Check Network/Firewall

- **Corporate firewall** blocking SMTP
- **Antivirus software** interfering
- **VPN** causing connection issues

## 🔍 Step 10: Final Checklist

- [ ] `.env.local` file exists and is formatted correctly
- [ ] Gmail app password is 16 characters long
- [ ] 2-factor authentication is enabled
- [ ] Development server restarted after changes
- [ ] No console errors in browser
- [ ] Checked spam/junk folder
- [ ] Test email script works

## 🆘 Still Not Working?

If none of the above solutions work:

1. **Try a different email service** (Outlook, Yahoo)
2. **Use an email service provider** (SendGrid, Mailgun)
3. **Check your hosting provider's email policies**
4. **Contact your email provider's support**

## 📞 Quick Test

Run this command to test your setup:

```bash
npm run dev
```

Then submit a test booking and check:
1. Browser console for errors
2. Terminal/command prompt for server logs
3. Your email inbox (and spam folder)

The enhanced API now includes detailed logging to help identify the exact issue!

