"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h2 className="font-bold text-xl">
        Career Roadmap Generator
      </h2>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/")}
          className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium cursor-pointer"
        >
          Dashboard
        </button>

        <button
          onClick={() => router.push("/history")}
          className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium cursor-pointer"
        >
          History
        </button>
      </div>
    </nav>
  );
}