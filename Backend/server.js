const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const roadmapRoutes = require("./routes/roadmapRotes");

require("dotenv").config();

const app = express();

// Connect Database
connectDB();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-vercel-app.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/roadmap", roadmapRoutes);

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