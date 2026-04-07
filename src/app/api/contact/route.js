import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from Portfolio Contact Form`,
      text: message,
      html: `
        <h3>New message from portfolio contact form</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false, message: "Failed to send email." });
  }
}
