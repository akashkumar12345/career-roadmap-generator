"use client";

import { useState } from "react";

export default function RoadmapForm() {
  const [targetRole, setTargetRole] = useState("");
  const [currentSkills, setCurrentSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [roadmap, setRoadmap] = useState([]);

  const generateRoadmap = () => {
    if (!targetRole || !experienceLevel) {
      alert("Please fill all required fields");
      return;
    }

    const role = targetRole.toLowerCase().trim();

    let roadmapData = [];

    if (role === "frontend developer") {
      roadmapData = [
        "Learn HTML",
        "Learn CSS",
        "Learn JavaScript",
        "Learn React",
        "Learn Next.js",
        "Build Frontend Projects",
        "Learn Deployment",
      ];
    } else if (role === "backend developer") {
      roadmapData = [
        "Learn JavaScript",
        "Learn Node.js",
        "Learn Express.js",
        "Learn MongoDB",
        "Build REST APIs",
        "Learn Authentication & JWT",
        "Deploy Backend Projects",
      ];
    } else if (role === "full stack developer") {
      roadmapData = [
        "Learn HTML & CSS",
        "Learn JavaScript",
        "Learn React",
        "Learn Next.js",
        "Learn Node.js",
        "Learn Express.js",
        "Learn MongoDB",
        "Build Full Stack Projects",
        "Deploy Applications",
      ];
    } else {
      roadmapData = [
        "Learn Programming Fundamentals",
        "Choose a Technology Stack",
        "Build Projects",
        "Create Portfolio",
        "Apply for Jobs",
      ];
    }

    setRoadmap(roadmapData);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Generate Your Roadmap
      </h2>

      <div className="space-y-5">
        {/* Target Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Role
          </label>

          <input
            type="text"
            placeholder="Frontend Developer"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Current Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Skills
          </label>

          <input
            type="text"
            placeholder="HTML, CSS, JavaScript"
            value={currentSkills}
            onChange={(e) => setCurrentSkills(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>

          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateRoadmap}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Generate Roadmap
        </button>

        {/* Generated Roadmap */}
        {roadmap.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Generated Roadmap
            </h3>

            {roadmap.map((step, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-500 shadow-md rounded-lg p-4 mb-3"
              >
                <h4 className="font-semibold text-blue-600">
                  Step {index + 1}
                </h4>

                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}