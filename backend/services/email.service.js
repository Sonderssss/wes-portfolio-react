import { Resend } from "resend";
import { RESEND_API_KEY, TO_EMAIL } from "../services/env.js";
import emailTemplate from "../template/email.template.js";

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (name, email, phone, message) => {
  try {
    const html = emailTemplate(name, email, phone, message);

    const response = await resend.emails.send({
      from: "Portfolio <contact@wesleyy.live>",
      to: TO_EMAIL,
      subject: `New Message from ${name}`,
      replyTo: email,
      html,
    });

    return response;
  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
