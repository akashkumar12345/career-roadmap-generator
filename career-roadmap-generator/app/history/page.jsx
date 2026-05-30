"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function HistoryPage() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch All Roadmaps
  const fetchRoadmaps = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/roadmap/roadmaps`
      );

      setRoadmaps(response.data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Failed to fetch roadmaps");
    } finally {
      setLoading(false);
    }
  };

  // Delete Roadmap
  const deleteRoadmap = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this roadmap?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API_URL}/api/roadmap/${id}`
      );

      setRoadmaps((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete roadmap");
    }
  };

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <h2 className="text-2xl font-semibold">
          Loading Roadmaps...
        </h2>
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
          <h2 className="text-xl font-semibold">
            No Roadmaps Found
          </h2>

          <p className="text-gray-500 mt-2">
            Generate your first roadmap.
          </p>
        </div>
      ) : (
        roadmaps.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg p-5 mb-5 border"
          >
            <h2 className="text-2xl font-semibold text-blue-600">
              {item.targetRole}
            </h2>

            <p className="text-gray-600 mt-2">
              <strong>Skills:</strong>{" "}
              {item.currentSkills}
            </p>

            <p className="text-gray-600">
              <strong>Experience:</strong>{" "}
              {item.experienceLevel}
            </p>

            <p className="text-gray-500 mt-2">
              <strong>Created:</strong>{" "}
              {new Date(
                item.createdAt
              ).toLocaleDateString()}
            </p>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">
                Roadmap Steps:
              </h3>

              <ul className="list-disc pl-6 space-y-1">
                {item.roadmap?.map(
                  (step, index) => (
                    <li
                      key={index}
                      className="text-gray-700"
                    >
                      {step}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() =>
                  deleteRoadmap(item._id)
                }
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
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