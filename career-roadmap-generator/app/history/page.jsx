"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function HistoryPage() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRoadmaps = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/roadmap/roadmaps"
      );

      setRoadmaps(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteRoadmap = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/roadmap/${id}`
      );

      setRoadmaps((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete roadmap");
    }
  };

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Roadmap History
      </h1>

      {roadmaps.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          No Roadmaps Found
        </div>
      ) : (
        roadmaps.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg p-5 mb-4"
          >
            <h2 className="text-xl font-semibold">
              {item.targetRole}
            </h2>

            <p className="text-gray-600 mt-2">
              Skills: {item.currentSkills}
            </p>

            <p className="text-gray-600">
              Experience: {item.experienceLevel}
            </p>

            <p className="text-gray-500 mt-2">
              Created:{" "}
              {new Date(
                item.createdAt
              ).toLocaleDateString()}
            </p>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">
                Roadmap Steps:
              </h3>

              <ul className="list-disc pl-5">
                {item.roadmap.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() =>
                  deleteRoadmap(item._id)
                }
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}