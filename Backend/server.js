const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const roadmapRoutes = require("./routes/roadmapRotes");
require("dotenv").config();

const app = express();

// Connect MongoDB
connectDB();

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://career-roadmap-generator-six.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/roadmap", roadmapRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Career Roadmap API Running...",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});