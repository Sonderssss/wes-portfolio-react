import { Resend } from "resend";
import { RESEND_API_KEY } from "../services/env.js";
import emailTemplate from "../template/email.template.js";

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (to, subject, html) => {
  try {
    const email = await resend.emails.send({
      from,
      to,
      subject,
      html: emailTemplate(to, html),
    });
    return email;
  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
