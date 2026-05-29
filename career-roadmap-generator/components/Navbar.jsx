export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h2 className="font-bold text-xl">
        Career Roadmap Generator
      </h2>

      <div className="flex gap-4">
        <button>Dashboard</button>
        <button>History</button>
      </div>
    </nav>
  );
}