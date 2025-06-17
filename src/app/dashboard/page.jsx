"use client"

import { useState } from "react";
import history from "../data/history.json"
import DashboardBtn from "../components/Dashboard-btn"
import "../../css/dashboard.css";

// Calcula todo o tempo em minutos, desde a separação do tempo, até a divisao de milisegnds pra horas minutos
function Stats({ history }) {
  const totalMs = history.reduce((item, a) => item + a.ms_played, 0);
  const minutosTotais = Math.floor(totalMs / 60000);
  const horas = Math.floor(minutosTotais / 60);
  const minutos = minutosTotais % 60;

  return (
  <><div className="bg">
      <div className="container">
        <div className="logo-circle">
          <img
            src="/imgs/spoti-logo.svg"
            alt="profile-pic"           // imagem do usuario
            className="logo-img" />
        </div>
      </div>

      <div className="username">Usuário</div>

      <div className="stats-grid"> 
        <div className="stats-box">
          Reproduções: {history.length} 
        </div>
        <div className="stats-box">
          Faixas Ouvidas: {history.filter(item => item.reason_end === "endplay").length}
        </div>
        <div className="stats-box">
          Tempo de Reprodução: {`${horas}h ${minutos}min`}
        </div>
        <DashboardBtn></DashboardBtn>
      </div>
    </div></>
  );
};

export default function Page() {
  return (
  <>
    <Stats history={history} />
  </>
);
}
