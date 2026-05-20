import express from "express";
import { emailController } from "../controllers/email.controller.js";

const emailRouter = express.Router();

emailRouter.post("/send-email", emailController);

export default emailRouter;
