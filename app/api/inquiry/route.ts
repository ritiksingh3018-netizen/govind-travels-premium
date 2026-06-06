import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("EMAIL API HIT");

  try {
    const data = await req.json();

    const result = await resend.emails.send({
      from: "Yorra Travels <info@yorra.in>",
      to: ["info@yorra.in"],
      subject: `New Inquiry - ${data.destination}`,
      html: `
        <h2>New Travel Inquiry</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Destination:</strong> ${data.destination}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    console.log("EMAIL RESULT:", result);

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}