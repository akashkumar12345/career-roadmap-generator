const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const roadmapRoutes = require("./routes/roadmapRotes");

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/api/roadmap", roadmapRoutes);

app.get("/", (req, res) => {
  res.send("Career Roadmap API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});