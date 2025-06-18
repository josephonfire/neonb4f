"use client";
import { useState } from "react";
import "../../css/dashboard-btn.css";
import GraficoHoras from "./GraficoHoras";
import GraficoTempoDiario from "./GraficoTempoDiario";
import GraficoSeason from "./GraficoSeason";

export default function DashboardBtn() {
  const [active, setActive] = useState(0);

  const graficos = [
    <GraficoTempoDiario key="tempo" />,
    <GraficoHoras key="horas" />,
    <GraficoSeason key="season" />
  ];

  const buttons = [
    { label: "Average Time" },
    { label: "Hours" },
    { label: "Season" },
  ];

  return (
    <div>
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
      <div className="dashboard-grafico-container">
        {graficos[active]}
      </div>
    </div>
  );
}