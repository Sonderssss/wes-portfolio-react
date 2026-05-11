import express from "express";

const router = express.Router();

router.post("/send-email", (req, res) => {
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
    res.status(500)
    .json({ error: "Failed to send email" });
  }
});

export default router;