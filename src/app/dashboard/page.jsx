"use client"

import { useState } from "react";
import history from "../data/history.json"

export default function Page() {
  const [active, setActive] = useState(0);

  const buttons = [
    { label: "Average Time" },
    { label: "Hours" },
    { label: "Season" },
  ];

  
  return (
    <>
      <div className="bg-purple-950 min-h-screen px-4">
        <div className="container flex justify-center">
          <div className="rounded-full w-20 h-20 bg-white flex items-center justify-center mt-20">
            <img
              src="/imgs/spoti-logo.svg"
              alt="profile-pic"
              className="w-16 h-16"
            />
          </div>
        </div>
        <div className="boxes flex justify-center mt-3.5 font-black text-3xl">Usuário</div>
        <div className="grid grid-cols-1 gap-4 justify-items-center mt-4">
          <div className="w-full max-w-md bg-purple-600 rounded-2xl p-3 text-white text-lg border border-white">
            Reproduções: {history.length}
          </div>
          <div className="w-full max-w-md bg-purple-600 rounded-2xl p-3 text-white text-lg border border-white">
            Faixas Ouvidas: {history.filter(item => item.reason_end == "endplay").length
          }
          </div>
          <div className="w-full max-w-md bg-purple-600 rounded-2xl p-3 text-white text-lg border border-white">
            Tempo de Reprodução:{" "}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center mt-10 max-w-3xl mx-auto">
          {buttons.map((btn, idx) => (
            <button
              key={btn.label}
              onClick={() => setActive(idx)}
              className={`w-full max-w-xs flex justify-center items-center rounded-4xl py-2 px-8 transition-all duration-300
                ${active === idx
                  ? "bg-white text-purple-700 shadow-lg shadow-pink-400/30 scale-105"
                  : "bg-purple-700 text-white hover:bg-purple-600 hover:scale-105"}
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
