export default function HistoryPage() {
  const dummyHistory = [
    {
      id: 1,
      role: "Frontend Developer",
      date: "29 May 2026",
    },
    {
      id: 2,
      role: "Backend Developer",
      date: "28 May 2026",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Roadmap History
      </h1>

      {dummyHistory.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-5 mb-4"
        >
          <h2 className="text-xl font-semibold">
            {item.role}
          </h2>

          <p className="text-gray-500 mt-2">
            Created: {item.date}
          </p>

          <div className="flex gap-3 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              View
            </button>

            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}