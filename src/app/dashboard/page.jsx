"use client"

import { useState } from "react";
import history from "../data/history.json";
import DashboardBtn from "../components/Dashboard-btn";
import "../../css/dashboard.css";
import NavBar from "../components/NavBar.jsx"; 

function HorasTotais({ history }) {
  const totalMs = history.reduce((acc, item) => acc + item.ms_played, 0);
  const minutosTotais = Math.floor(totalMs / 60000);
  const horas = Math.floor(minutosTotais / 60);
  const minutos = minutosTotais % 60;

  const totalFaixas = history.filter(item => item.reason_end === "endplay").length;

  return (
    <div className="bg">
      {/* Logo e Nome */}
      <div className="container">
        <NavBar />
        <div className="logo-circle">
          <img
            src="/imgs/spoti-logo.svg"
            alt="profile-pic"
            className="logo-img"
          />
        </div>
      </div>

      <div className="username">Usuário</div>

      {/* Estatísticas */}
      <div className="stats-grid">
        <div className="stats-box">
          Reproduções: {history.length}
        </div>
        <div className="stats-box">
          Faixas Ouvidas: {totalFaixas}
        </div>
        <div className="stats-box">
          Tempo de Reprodução: {`${horas}h ${minutos}min`}
        </div>
      </div>

      {/* Botões */}
      <div className="dashboard-btn-container">
        <DashboardBtn />
      </div>

    </div>
  );
}

export default function Page() {
  return (
    <>
      <HorasTotais history={history} />
    </>
  );
}
