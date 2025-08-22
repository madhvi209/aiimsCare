// Test script for booking API
// Run this in your browser console or use curl/Postman

console.log('🧪 Testing Booking API...\n');

const testData = {
  fullName: "Test Patient",
  phone: "+91 9876543210",
  email: "test@example.com",
  serviceType: "Injection Administration",
  details: "This is a test booking",
  address: "123 Test Street, Test City, Test State 123456",
  timeSlot: "Morning (8:00 AM - 12:00 PM)"
};

// Method 1: Browser Console Test
// Copy and paste this into your browser console while on your website
async function testInBrowser() {
  try {
    console.log('📤 Sending test booking data...');
    console.log('Data:', JSON.stringify(testData, null, 2));
    
    const response = await fetch('/api/sendBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('📥 Response status:', response.status);
    const result = await response.json();
    console.log('📥 Response body:', JSON.stringify(result, null, 2));
    
    if (result.success) {
      console.log('✅ API call successful!');
    } else {
      console.log('❌ API call failed:', result.message);
    }
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
  }
}

// Method 2: cURL Command
// Run this in your terminal
const curlCommand = `
curl -X POST http://localhost:3000/api/sendBooking \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(testData)}'
`;

console.log('📋 cURL Command:');
console.log(curlCommand);
console.log('');

// Method 3: Manual Test Instructions
console.log('📋 Manual Test Instructions:');
console.log('1. Start your development server: npm run dev');
console.log('2. Open your website in browser');
console.log('3. Open browser developer tools (F12)');
console.log('4. Go to Console tab');
console.log('5. Copy and paste the testInBrowser() function above');
console.log('6. Run: testInBrowser()');
console.log('7. Check the response and your email');
console.log('');

// Export for browser use
if (typeof window !== 'undefined') {
  window.testInBrowser = testInBrowser;
}
