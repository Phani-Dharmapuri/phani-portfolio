import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Using Web3Forms (free email forwarding service)
    // You'll need to get an access key from https://web3forms.com
    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_ACCESS_KEY) {
      // Fallback: Return success but log the message
      console.log("Contact Form Submission:", {
        name,
        email,
        company,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message: "Form submitted successfully (demo mode - no email sent)",
      });
    }

    // Send email via Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        email,
        company: company || "Not provided",
        message,
        subject: `Portfolio Contact: ${name}`,
        from_name: "Portfolio Contact Form",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    } else {
      throw new Error(data.message || "Failed to send message");
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try emailing directly." },
      { status: 500 }
    );
  }
}
