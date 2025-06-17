"use client"
import { useState } from "react";

export default function DashboardBtn() {
  const [active, setActive] = useState(0);

  const buttons = [
    { label: "Average Time" },
    { label: "Hours" },
    { label: "Season" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center mt-10 max-w-3xl mx-auto">
      {buttons.map((btn, idx) => (
        <button
          key={btn.label}
          onClick={() => setActive(idx)}
          className={`w-full max-w-xs flex justify-center items-center rounded-4xl py-2 px-8 transition-all duration-300
            ${
              active === idx
                ? "bg-white text-purple-700 shadow-lg shadow-pink-400/30 scale-105"
                : "bg-purple-700 text-white hover:bg-purple-600 hover:scale-105"
            }
          `}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}