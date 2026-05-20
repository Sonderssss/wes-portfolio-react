import express from "express";
import { sendEmail } from "../services/email.service.js";
import { validateEmailData } from "../services/validator.js";

const emailRouter = express.Router();

emailRouter.post("/api/send-email", async (req, res) => {
  try {
    const validatedData = validateEmailData(req.body);

    const result = await sendEmail(validatedData);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

export default emailRouter;
