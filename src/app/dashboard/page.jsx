"use client"

import { useState } from "react";
import history from "../data/history.json"
import DashboardBtn from "../components/Dashboard-btn"

export default function Page() {

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
            Tempo de Reprodução: {(() => {
      const totalMs = history.reduce((item, a) => item + a.ms_played, 0);
      const totalMinutes = Math.floor(totalMs / 60000); // total por cada minuto
      const hours = Math.floor(totalMinutes / 60); // minuto para horas
      const minutes = totalMinutes % 60; // restante 
      return `${hours}h ${minutes}min`;
    })()
  }
          </div>
          <DashboardBtn></DashboardBtn>
        </div>
        </div>
    </>
  );
}
