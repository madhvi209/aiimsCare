import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Debug: Log environment variables (without exposing passwords)
    console.log("Email configuration check:");
    console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
    console.log("Email user:", process.env.EMAIL_USER);

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { success: false, message: "Email configuration is missing" },
        { status: 500 }
      );
    }

    // Validate required fields
    if (!data.fullName || !data.phone || !data.serviceType || !data.address || !data.timeSlot) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Try multiple email configurations
    let transporter;

    // Configuration 1: Gmail with OAuth2 (recommended)
    try {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        secure: false, // Use TLS
        tls: {
          rejectUnauthorized: false
        }
      });

      // Verify connection
      await transporter.verify();
      console.log("Gmail connection verified successfully");
    } catch (gmailError) {
      console.error("Gmail configuration failed:", gmailError);
      
      // Configuration 2: Try with different settings
      try {
        transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        
        await transporter.verify();
        console.log("SMTP Gmail connection verified successfully");
      } catch (smtpError) {
        console.error("SMTP Gmail configuration also failed:", smtpError);
        
        // Configuration 3: Try with port 465 (SSL)
        try {
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            }
          });
          
          await transporter.verify();
          console.log("SSL Gmail connection verified successfully");
        } catch (sslError) {
          console.error("All Gmail configurations failed:", sslError);
          throw new Error("Unable to configure email service");
        }
      }
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Home Care Booking Request</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #001055; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #001055; }
          .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 4px solid #001055; }
          .urgent { background: #fff3cd; border-left-color: #ffc107; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏥 New Home Care Booking Request</h1>
            <p>You have received a new booking request for home care services</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Patient Name:</div>
              <div class="value">${data.fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">📞 Phone Number:</div>
              <div class="value">${data.phone}</div>
            </div>
            
            ${data.email ? `
            <div class="field">
              <div class="label">📧 Email Address:</div>
              <div class="value">${data.email}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">🏥 Service Required:</div>
              <div class="value">${data.serviceType}</div>
            </div>
            
            ${data.details ? `
            <div class="field">
              <div class="label">📝 Additional Details:</div>
              <div class="value">${data.details}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">📍 Complete Address:</div>
              <div class="value">${data.address}</div>
            </div>
            
            <div class="field">
              <div class="label">⏰ Preferred Time Slot:</div>
              <div class="value ${data.timeSlot.includes('Emergency') ? 'urgent' : ''}">${data.timeSlot}</div>
            </div>
            
            <div class="footer">
              <p><strong>Booking Time:</strong> ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
              <p>Please contact the patient within 30 minutes to confirm this booking.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create plain text version for email clients that don't support HTML
    const textContent = `
New Home Care Booking Request
============================

Patient Name: ${data.fullName}
Phone Number: ${data.phone}
${data.email ? `Email Address: ${data.email}` : ''}
Service Required: ${data.serviceType}
${data.details ? `Additional Details: ${data.details}` : ''}
Complete Address: ${data.address}
Preferred Time Slot: ${data.timeSlot}

Booking Time: ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

Please contact the patient within 30 minutes to confirm this booking.
    `;

    const mailOptions = {
      from: `"AIIMS Home Care" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to your email
      subject: `🏥 New Booking: ${data.serviceType} - ${data.fullName}`,
      text: textContent,
      html: htmlContent,
    };

    console.log("Attempting to send email to:", process.env.EMAIL_USER);
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);

    return NextResponse.json({ 
      success: true, 
      message: "Booking request sent successfully!",
      messageId: result.messageId
    });
    
  } catch (error: unknown) {
    console.error("Email sending error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to send booking request. Please try again.";
    
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'EAUTH') {
        errorMessage = "Email authentication failed. Please check your email and password.";
      } else if (error.code === 'ECONNECTION') {
        errorMessage = "Email connection failed. Please check your internet connection.";
      } else if (error.code === 'ETIMEDOUT') {
        errorMessage = "Email request timed out. Please try again.";
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      }, 
      { status: 500 }
    );
  }
}
