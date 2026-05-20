import express from "express";
import { emailController } from "../controllers/email.controller.js";

const emailRouter = express.Router();

emailRouter.post("/api/send-email", emailController);

export default emailRouter;
