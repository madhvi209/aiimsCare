import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing email configuration");
            return NextResponse.json(
                { success: false, message: "Server configuration error. Please contact support." },
                { status: 500 }
            );
        }

        // Configure nodemailer with your email service settings
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Prepare the email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL, // Change this to your admin email
            subject: "New Career Application Received",
            html: `
                <h2>New Career Application</h2>
                <h3>Personal Information</h3>
                <p><strong>Full Name:</strong> ${formData.fullName}</p>
                <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
                <p><strong>Father's Name:</strong> ${formData.fatherName}</p>
                <p><strong>Permanent Address:</strong> ${formData.permanentAddress}</p>
                <p><strong>Current Address:</strong> ${formData.currentAddress || "Same as permanent address"}</p>
                <p><strong>Aadhar Number:</strong> ${formData.aadharNumber}</p>
                
                <h3>Professional Details</h3>
                <p><strong>Registration Number:</strong> ${formData.registrationNumber || "Not provided"}</p>
                <p><strong>Years of Experience:</strong> ${formData.yearsExperience}</p>
                <p><strong>Field of Expertise:</strong> ${formData.fieldExpertise}</p>
            `,
        };

        // Verify connection
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error("Email verification failed:", verifyError);
            return NextResponse.json(
                { success: false, message: "Email service unavailable. Please try again later." },
                { status: 500 }
            );
        }

        // Send the email
        try {
            await transporter.sendMail({
                ...mailOptions,
                to: process.env.EMAIL_USER, // Fallback to sender's email if recipient not specified
                replyTo: formData.mobileNumber ? `${formData.fullName} <${formData.mobileNumber}>` : undefined,
            });
            return NextResponse.json({ success: true, message: "Application submitted successfully!" });
        } catch (sendError) {
            console.error("Failed to send email:", sendError);
            return NextResponse.json(
                { success: false, message: "Failed to send application. Please try again." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Request processing error:", error);
        return NextResponse.json(
            { success: false, message: "An unexpected error occurred. Please try again." },
            { status: 500 }
        );
    }
}
