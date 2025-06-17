"use client";
import { useState } from "react";
import "../../css/dashboard-btn.css"; // Importa o CSS separado

export default function DashboardBtn() {
  const [active, setActive] = useState(0);

  const buttons = [
    { label: "Average Time" },
    { label: "Hours" },
    { label: "Season" },
  ];

  return (
    <div className="dashboard-btn-container">
      {buttons.map((btn, idx) => (
        <button
          key={btn.label}
          onClick={() => setActive(idx)}
          className={`dashboard-btn ${active === idx ? "active" : ""}`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
