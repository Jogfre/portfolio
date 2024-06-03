import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const  destinationEmail = process.env.DESTINATION_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Email Function:", email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: destinationEmail,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>From: </p>
          <p>{email}</p>
          <p>Message:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
