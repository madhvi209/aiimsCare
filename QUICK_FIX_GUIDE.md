# Quick Fix Guide for Email Issue

## 🚨 Immediate Steps to Fix Email Problem

### Step 1: Check Your Environment Variables
Make sure your `.env.local` file exists and contains:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Step 2: Restart Development Server
```bash
# Stop your current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 3: Test the API Directly
1. **Open your website** in browser
2. **Open Developer Tools** (F12)
3. **Go to Console tab**
4. **Copy and paste this code:**

```javascript
async function testEmail() {
  const testData = {
    fullName: "Test Patient",
    phone: "+91 9876543210",
    email: "test@example.com",
    serviceType: "Injection Administration",
    details: "Test booking",
    address: "123 Test Street, Test City",
    timeSlot: "Morning (8:00 AM - 12:00 PM)"
  };

  try {
    const response = await fetch('/api/sendBooking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log('Response:', result);
    
    if (result.success) {
      alert('✅ Email sent successfully!');
    } else {
      alert('❌ Error: ' + result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Network error');
  }
}

testEmail();
```

### Step 4: Check Console Output
Look for these messages in your terminal/console:
- `"Email configuration check:"`
- `"EMAIL_USER exists: true"`
- `"EMAIL_PASS exists: true"`
- `"Gmail connection verified successfully"`

### Step 5: Common Issues & Solutions

**Issue: "Email configuration is missing"**
- Solution: Check `.env.local` file exists and restart server

**Issue: "Email authentication failed"**
- Solution: Generate new Gmail app password

**Issue: Getting coordinates/traffic data instead of email response**
- Solution: You're calling the wrong endpoint or there's a caching issue
- Clear browser cache and try again

**Issue: No response at all**
- Solution: Check if server is running on correct port

### Step 6: Alternative Test Method
Use cURL in terminal:
```bash
curl -X POST http://localhost:3000/api/sendBooking \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Patient",
    "phone": "+91 9876543210",
    "email": "test@example.com",
    "serviceType": "Injection Administration",
    "details": "Test booking",
    "address": "123 Test Street, Test City",
    "timeSlot": "Morning (8:00 AM - 12:00 PM)"
  }'
```

### Step 7: Check Email
- Check your **inbox**
- Check your **spam/junk folder**
- Check your **promotions tab** (Gmail)

## 🔧 If Still Not Working

1. **Try a different email service** (Outlook, Yahoo)
2. **Use email service provider** (SendGrid, Mailgun)
3. **Check your hosting provider's email policies**

## 📞 Debug Information

The enhanced API now logs detailed information. Check your terminal for:
- Environment variable status
- Email connection attempts
- Success/failure messages
- Error details

This will help identify exactly what's going wrong!

