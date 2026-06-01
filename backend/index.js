import express from "express";
import cors from "cors";
import { PORT, CORS_URL, WEBSITE_URL } from "../backend/services/env.js";
import routes from "./routes/routes.js";

const app = express();

const parseOrigins = (value) => {
  if (!value) return [];
  return value
    .split(",")
    .map((url) => url.replace(/['"]/g, "").trim())
    .filter(Boolean);
};

const allowedOrigins = [
  ...parseOrigins(CORS_URL),
  ...parseOrigins(WEBSITE_URL),
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.options(/.*/, cors(corsOptions)); // Enable pre-flight for all routes
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

app.use(routes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
