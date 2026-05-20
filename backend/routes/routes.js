import { Router } from "express";
import emailRouter from "./email.route.js";

const router = Router();

router.use("/api", emailRouter);

export default router;
