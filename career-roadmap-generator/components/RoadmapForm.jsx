"use client";

export default function RoadmapForm() {
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>

          <select
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Generate Roadmap
        </button>
      </div>
    </div>
  );
}