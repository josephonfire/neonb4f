import React, { PureComponent } from "react";
import history from "../data/history.json";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function minutosPorHora(dados) {
  const horas = Array(24).fill(0);

  dados.forEach((item) => {
    const hora = new Date(item.ts).getHours();
    horas[hora] += Math.floor(item.ms_played / 60000);
  });

  // retorna hora:0 minutos: ??

  return horas.map((minutos, hora) => ({ hora, minutos }));
}

export default function GraficoHoras() {
  const minHorasProcessados = minutosPorHora(history); // When do users listen to music most

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{
          textAlign: "center",
          marginBottom: "1rem",
          color: "#fff",
          fontWeight: "bold",
          textShadow: "0 0 5px #8b5cf6",
        }}>Horas por Dia</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={minHorasProcessados}
          margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hora" stroke="#fff"/>
          <YAxis stroke="#fff"/>
          <Tooltip wrapperStyle={{ width: "50%", color: "#521f90" 
          }} />
          <Area
            type="monotone"
            dataKey="minutos"
            stroke="#fff"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
