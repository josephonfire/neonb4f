"use client";
import { useState } from "react";
import "../../css/dashboard-btn.css";

export default function Top100btn({ buttons, onClick, renderContent }) {
  const [active, setActive] = useState(0);

  function handleClick(idx) {
    setActive(idx);
    onClick && onClick(idx); // dispara função externa se enviada
  }

  return (
    <div>
      <div className="dashboard-btn-container">
        {buttons.map((btn, idx) => (
          <button
            key={btn.label}
            onClick={() => handleClick(idx)}
            className={`dashboard-btn ${active === idx ? "active" : ""}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {renderContent && (
        <div className="dashboard-grafico-container">
          {renderContent(active)}
        </div>
      )}
    </div>
  );
}
