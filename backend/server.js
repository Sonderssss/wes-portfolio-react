import express from "express";
import cors from "cors";
import { PORT } from "../backend/services/env.js";
import routes from "../backend/routes/routes.js";

const app = express();

app.use(cors());
app.use(routes);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
