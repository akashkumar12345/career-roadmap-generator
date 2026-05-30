"use client";

import { useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function RoadmapForm() {
  const [targetRole, setTargetRole] = useState("");
  const [currentSkills, setCurrentSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    if (!targetRole || !experienceLevel) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/api/roadmap/generate`,
        {
          targetRole,
          currentSkills,
          experienceLevel,
        }
      );

      setRoadmap(response.data.data.roadmap);
    } catch (error) {
      console.error("Generate Error:", error);
      alert("Failed to generate roadmap");
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          {loading ? "Generating..." : "Generate Roadmap"}
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