// Check environment variables
// Run this in your terminal: node check-env.js

require('dotenv').config({ path: '.env.local' });

console.log('🔍 Checking Environment Variables...\n');

console.log('EMAIL_USER:', process.env.EMAIL_USER || 'NOT SET');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET (hidden)' : 'NOT SET');
console.log('');

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.log('❌ Missing environment variables!');
  console.log('');
  console.log('📋 Create or update your .env.local file:');
  console.log('');
  console.log('EMAIL_USER=your-email@gmail.com');
  console.log('EMAIL_PASS=your-16-character-app-password');
  console.log('');
  console.log('💡 Make sure:');
  console.log('- No spaces around =');
  console.log('- No quotes around values');
  console.log('- File is named exactly .env.local');
  console.log('- File is in your project root directory');
} else {
  console.log('✅ Environment variables are set!');
  console.log('');
  console.log('💡 If you\'re still getting errors:');
  console.log('1. Restart your development server');
  console.log('2. Check your Gmail app password');
  console.log('3. Make sure 2-factor authentication is enabled');
}
