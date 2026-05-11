import { Resend } from "resend";
import { RESEND_API_KEY } from "../services/env.js";

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (to, subject, html) => {
  try {
    const email = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });
    return email;
  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
