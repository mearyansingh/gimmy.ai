import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { profileRouter } from "./routes/profile";
import { planRouter } from "./routes/plan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://gimmy-ai.onrender.com"
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("AI Gym Planner API is running 🚀");
});

//API ROUTES
app.use('/api/profile', profileRouter)
app.use('/api/plan', planRouter)


app.listen(PORT, () => {
  console.log(`AI gym planner server running on port ${PORT}`);
});