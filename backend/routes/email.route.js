import express from "express";
import { sendEmail } from "../services/email.service.js";

const emailRouter = express.Router();

emailRouter.post("/api/send-email", async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const result = await sendEmail({ to, subject, message });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default emailRouter;
