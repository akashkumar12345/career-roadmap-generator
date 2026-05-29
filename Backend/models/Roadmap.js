const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    targetRole: {
      type: String,
      required: true,
      trim: true,
    },

    currentSkills: {
      type: String,
      required: true,
    },

    experienceLevel: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },

    roadmap: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Roadmap", roadmapSchema);