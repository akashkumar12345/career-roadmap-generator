const Roadmap = require("../models/Roadmap");

// CREATE ROADMAP
const createRoadmap = async (req, res) => {
  try {
    const {
      targetRole,
      currentSkills,
      experienceLevel,
    } = req.body;

    let roadmap = [];

    if (
      targetRole.toLowerCase() ===
      "frontend developer"
    ) {
      roadmap = [
        "Learn HTML",
        "Learn CSS",
        "Learn JavaScript",
        "Learn React",
        "Learn Next.js",
      ];
    } else if (
      targetRole.toLowerCase() ===
      "backend developer"
    ) {
      roadmap = [
        "Learn Node.js",
        "Learn Express.js",
        "Learn MongoDB",
        "Learn Authentication",
      ];
    } else if (
      targetRole.toLowerCase() ===
      "full stack developer"
    ) {
      roadmap = [
        "Learn HTML",
        "Learn CSS",
        "Learn JavaScript",
        "Learn React",
        "Learn Next.js",
        "Learn Node.js",
        "Learn Express.js",
        "Learn MongoDB",
      ];
    }

    const savedRoadmap = await Roadmap.create({
      targetRole,
      currentSkills,
      experienceLevel,
      roadmap,
    });

    res.status(201).json({
      success: true,
      data: savedRoadmap,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL ROADMAPS
const getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: roadmaps.length,
      data: roadmaps,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE ROADMAP
const deleteRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findByIdAndDelete(
      req.params.id
    );

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Roadmap deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRoadmap,
  getAllRoadmaps,
  deleteRoadmap,
};