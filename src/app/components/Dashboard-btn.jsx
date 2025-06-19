"use client";
import { useState } from "react";
import "../../css/dashboard-btn.css";
import GraficoHoras from "../components/GraficoHoras"
import GraficoSeasonPie from "../components/GraficoSeason"
import GraficoMediaMovel7Dias from "../components/GraficoTempoDiario"

export default function DashboardBtn() {
  const [active, setActive] = useState(0);

  const graficos = [
    <GraficoMediaMovel7Dias key="tempo" />,
    <GraficoHoras key="horas" />,
    <GraficoSeasonPie key="season" />
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