import React from "react";
import history from "../data/history.json";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// funcao que pega os minutos e passa por estacao os dados com varios ifs para verificar se o dia ou mes é tal, conforme estacao
function minutosPorEstacao(dados) {
  function getEstacao(data) {
    const mes = data.getMonth() + 1;
    const dia = data.getDate();
    if ((mes === 12 && dia >= 21) || (mes <= 3 && (mes < 3 || (mes === 3 && dia < 20)))) return "Inverno";
    if ((mes === 3 && dia >= 20) || (mes < 6) || (mes === 6 && dia < 21)) return "Primavera";
    if ((mes === 6 && dia >= 21) || (mes < 9) || (mes === 9 && dia < 23)) return "Verão";
    if ((mes === 9 && dia >= 23) || (mes < 12) || (mes === 12 && dia < 21)) return "Outono";
    return "Desconhecido";
  }
  const estacoes = { Inverno: 0, Verão: 0, Primavera: 0, Outono: 0 };
  // crio um objeto que começa com 0, assim pra cada item é iterado

  dados.forEach(item => {
    const date = new Date(item.ts);
    const estacao = getEstacao(date);
    estacoes[estacao] += Math.floor(item.ms_played / 60000);
  });
  return Object.entries(estacoes).map(([estacao, minutos]) => ({ estacao, minutos }));
}

// Cores para cada estação do rechart
const COLORS = ["#6366f1", "#00BFFF", "#00008B", "#8B008B"];

                // roxo claro.     azul.    azul bebe.    roxo 

// Label customizado, esquece isso so copiei
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index, name
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontWeight={700}
      fontSize={14}
    >
      {`${name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

export default function GraficoSeasonPie() {
  const data = minutosPorEstacao(history);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{
          textAlign: "center",
          marginBottom: "1rem",
          color: "#fff",
          fontWeight: "bold",
          textShadow: "0 0 5px #8b5cf6",
        }}>Tempo de uso por estação</h2>
      <ResponsiveContainer width="100%" height={400} margin="10px">
        <PieChart>
          <Pie
            data={data}
            dataKey="minutos"
            nameKey="estacao"
            cx="50%"
            cy="50%"
            outerRadius={140}
            labelLine={false}
            label={props => renderCustomizedLabel({ ...props, name: data[props.index].estacao })}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={value => `${value} min`} wrapperStyle={{ width: "50%", color: "#521f90" }}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}