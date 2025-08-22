# Email Setup Guide

To receive booking form details via email, follow these steps:

## 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

## 2. Gmail App Password Setup

Since Gmail requires 2-factor authentication for app passwords:

1. **Enable 2-Factor Authentication:**
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to Security > App passwords
   - Select "Mail" as the app
   - Click "Generate"
   - Copy the 16-character password

3. **Use the App Password:**
   - Replace `your-app-password-here` in `.env.local` with the generated password
   - Use your Gmail address for `EMAIL_USER`

## 3. Alternative Email Services

If you prefer other email services, you can modify the transporter in `app/api/sendBooking/route.ts`:

### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransporter({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransporter({
  host: "your-smtp-host.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 4. Testing

1. Start your development server: `npm run dev`
2. Fill out the booking form on your website
3. Submit the form
4. Check your email for the booking details

## 5. Security Notes

- Never commit `.env.local` to version control
- Keep your app password secure
- Consider using environment variables in production

## 6. Email Features

The enhanced email system includes:
- ✅ Professional HTML formatting
- ✅ Plain text fallback
- ✅ Indian timezone (IST)
- ✅ Emergency booking highlighting
- ✅ Form validation
- ✅ Error handling
- ✅ Responsive design

Your booking form will now send beautifully formatted emails with all the patient details!
