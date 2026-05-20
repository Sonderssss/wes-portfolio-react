import express from "express";
import { sendEmail } from "../services/email.service.js";
import { validateEmailData } from "../services/validator.js";

const emailRouter = express.Router();

emailRouter.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const validatedData = validateEmailData({
      name,
      email,
      phone,
      message,
    });

    const result = await sendEmail(
      validatedData.name,
      validatedData.email,
      validatedData.phone,
      validatedData.message,
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default emailRouter;
