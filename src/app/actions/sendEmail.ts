"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const interest = formData.get("interest") as string;
    const message = formData.get("message") as string;

    // Recipients List
    const recipients = [
        "info@kandledirectpublishing.com", // Assumed email for the domain
    ];

    if (process.env.EMAIL_RECIPIENT_1) recipients.push(process.env.EMAIL_RECIPIENT_1);
    if (process.env.EMAIL_RECIPIENT_2) recipients.push(process.env.EMAIL_RECIPIENT_2);
    if (process.env.EMAIL_RECIPIENT_3) recipients.push(process.env.EMAIL_RECIPIENT_3);

    // Fallback if no env vars (or just keep hardcoded for safety as base)
    if (process.env.EMAIL_RECIPIENT_1 === undefined &&
        process.env.EMAIL_RECIPIENT_2 === undefined &&
        process.env.EMAIL_RECIPIENT_3 === undefined) {
        // Add defaults only if environment variables are not set at all
        recipients.push("muhammadalisoomr110@gmail.com");
        recipients.push("aliahk.developer@gmail.com");
        recipients.push("khalid8sharpk@gmail.com");
    }

    // Configure Nodemailer Transporter
    // NOTE: For Gmail, you needs an 'App Password' if 2FA is on.
    // For now I'm setting up the structure. The user needs to add env variables.
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // e.g. your-email@gmail.com
            pass: process.env.EMAIL_PASS, // e.g. your-app-password
        },
    });

    const mailOptions = {
        from: `"Kandle Website" <${process.env.EMAIL_USER}>`,
        to: recipients.join(", "),
        subject: `New Lead: ${name} - ${interest}`,
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #ea580c;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Interested In:</strong> ${interest}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p style="background: #f3f4f6; padding: 12px; border-left: 4px solid #ea580c;">${message}</p>
                <br/>
                <hr/>
                <p style="font-size: 12px; color: #666;">This email was sent from the Kandle Direct Publishing website.</p>
            </div>
        `,
    };

    // Log the data for debugging (so you can see it in the terminal)
    console.log("------------------------------------------");
    console.log("Received Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("------------------------------------------");

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("❌ ERROR: Missing email credentials in .env.local file.");
        console.error("Please create a .env.local file with EMAIL_USER and EMAIL_PASS variables.");
        // We return success: false here so the UI knows it failed, 
        // but for now let's allow it to 'succeed' in UI so you can see the flow, 
        // while logging the error server-side.
        return { success: false, error: "Server configuration error: Missing credentials" };
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully to:", recipients.join(", "));
        return { success: true };
    } catch (error) {
        console.error("❌ Email Sending Failed:", error);
        return { success: false, error: "Failed to send email" };
    }
}
