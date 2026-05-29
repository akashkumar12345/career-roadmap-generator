const express = require("express");

const {
  createRoadmap,
  getAllRoadmaps,
  deleteRoadmap,
} = require("../controllers/roadmapController");

const router = express.Router();

router.post("/generate", createRoadmap);

router.get("/roadmaps", getAllRoadmaps);

router.delete("/:id", deleteRoadmap);

module.exports = router;