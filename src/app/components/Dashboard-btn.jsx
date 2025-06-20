"use client";
import { useState } from "react";
import "../../css/dashboard-btn.css";
import GraficoHoras from "../components/GraficoHoras"
import GraficoSeasonPie from "../components/GraficoSeason"
import GraficoMediaMovel7Dias from "../components/GraficoTempoDiario"

export default function DashboardBtn() {
  const [active, setActive] = useState(0);

  const graficos = [
    <GraficoHoras key="horas" />,
    <GraficoMediaMovel7Dias key="tempo" />,
    <GraficoSeasonPie key="season" />
  ];

  const buttons = [
    { label: "Horas" },
    { label: "Média" },
    { label: "Estação" },
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