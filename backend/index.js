import express from "express";
import cors from "cors";
import { PORT, CORS_URL, WEBSITE_URL } from "../backend/services/env.js";
import routes from "./routes/routes.js";

const app = express();

app.use(
  cors({
    origin: [CORS_URL, WEBSITE_URL],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  }),
);

app.options("*", cors()); // Enable pre-flight for all routes
app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
