import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import history from "../data/history.json";

function processarDados(dados) {
  const msPorDia = {};
  dados.forEach((item) => {
    const data = item.ts.split("T")[0];
    if (!msPorDia[data]) msPorDia[data] = 0;
    msPorDia[data] += item.ms_played;
  });
  const arr = Object.entries(msPorDia).map(([data, ms]) => ({
    data,
    minutos: ms / 60000,
  }));
  arr.sort((a, b) => new Date(a.data) - new Date(b.data));
  return arr;
}

function calcularMediaMovel(data, windowSize = 7) {
  const mediasMoveis = [];
  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - windowSize + 1);
    const windowSlice = data.slice(start, i + 1);
    const soma = windowSlice.reduce((acc, val) => acc + val.minutos, 0);
    const media = soma / windowSlice.length;
    mediasMoveis.push({
      data: data[i].data,
      mediaMovel: Math.round(media.toFixed(2)),
    });
  }
  return mediasMoveis;
}

export default function GraficoMediaMovel7Dias() {
  const dadosProcessados = processarDados(history);
  const dadosMediaMovel = calcularMediaMovel(dadosProcessados, 7);

  return (
    <div style={{ width: "100%", height: 450, color: "#fff" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          color: "#fff",
          fontWeight: "bold",
          textShadow: "0 0 5px #8b5cf6",
        }}
      >
        Média semanal (7 dias) - minutos escutados
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={dadosMediaMovel}
          margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#7c3aed" strokeDasharray="5 5" />
          <XAxis
            dataKey="data"
            tick={{ fill: "#ffffff" }}
            tickFormatter={(date) => date.slice(5)}
            minTickGap={20}
            stroke="#ffffff"
          />
          <YAxis
            stroke="#ffffff"
            tick={{ fill: "#ffffff" }}
            domain={[0, "dataMax + 10"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#6d28d9",
              borderRadius: "8px",
              borderColor: "#a78bfa",
              color: "#fafafa",
            }}
            labelStyle={{ color: "#ffffff" }}
            itemStyle={{ color: "#ffffff" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ color: "#ffffff", fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="mediaMovel"
            stroke="#fff"
            strokeWidth={3}
            dot={false}
            name="Média 7 dias"
            activeDot={{ r: 6, stroke: "#000", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
