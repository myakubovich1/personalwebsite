import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // TODO: replace this console.log with your email provider
    // e.g. Resend: await resend.emails.send({ from: '...', to: '...', ... })
    console.log("[Contact form submission]", {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
