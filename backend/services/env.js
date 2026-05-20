import dotenv from "dotenv";
dotenv.config();

const { RESEND_API_KEY, FROM_EMAIL, TO_EMAIL, PORT, CORS_URL } = process.env;

export { RESEND_API_KEY, FROM_EMAIL, TO_EMAIL, PORT, CORS_URL };
